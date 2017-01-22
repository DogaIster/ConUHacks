const mongoose = require('mongoose');
const pi = require('./pi_watchdog');

mongoose.connect('mongodb://localhost/test');
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
	console.log('We are connected');
	/*
	mongoose.connection.collections['devices'].drop(function (err) {
		console.log('collection dropped');
	});
*/

});

const getTime = () => {
	const d = new Date();
	return +d.getTime();
};



let deviceSchema = mongoose.Schema({
	numDevices: Number,
	created: Number,
	devices: [],
});

let Device = mongoose.model('Device', deviceSchema);

const getStatus = (cb) => {
	Device.find().sort('-created').limit(90).exec((err, data) => {
		if (err) return console.error(err);
		const mstRecEntry = data[0];
		const mstRecDevices = mstRecEntry.devices;
		mstRecDevices.forEach((dev, idx) => {
			pi.pingCmp(dev.ip, (res) => {
				dev.lastUpdate = getTime();
				if (res.alive) {
					dev.status = 'on';
					dev.uptime += getTime();
					dev.lastRestart += getTime();

				} else {
					dev.status = 'off';
					dev.uptime = 0;
					dev.lastRestart = 0;
				}
				//if last iteration then save object as a
				//new entry
				if (idx === (mstRecDevices.length - 1)) {
					let newEntry = new Device({
						numDevices: mstRecEntry.numDevices,
						created: getTime(),
						devices: mstRecEntry.devices,
					});
					newEntry.save((err) => {
						if (err) {
							console.log(err);
						} else {
							console.log(`Saved: ${newEntry}`);
						}
					});
				}
			});
		});
		cb(data);
	});
};

const statusUpdateObj = (ip = '192.156.0.2', alias = 'comp', id = 0) => {
	let obj = {
		status: 'unknown',
		lastUpdate: 0,
		lastRestart: 0,
		uptime: 0,
		alias,
		ip,
		id,
	};

	return obj;
};

const validCmpRegister = (form, cb) => {
	if (!form)
		return false;
	let ip, alias;
	({
		ip,
		alias
	} = form);
	console.log(form);
	const ipRegex = /0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/;
	const aliasRegex = /[a-zA-Z0-9-_]{1,15}/;
	if (!ip && ip.search(ipRegex) === -1) {
		return false;
	}

	if (!alias && alias.search(aliasRegex) === -1) {
		return false;
	}

	pi.pingCmp(ip, (data) => {
		if (data.alive) {
			registerCmp(ip, alias);
			cb(true);
		} else {
			cb(false);
		}
	});

};

const registerCmp = (ip, alias) => {
	let c;
	//get last entry
	Device.find().sort('-created').limit(1).exec((err, res) => {
		//if no devices
		if (err) {
			console.log(err);
			return;
		}
		/*
		numDevices: Number,
		created: {
			type: Date,
			default: getTime(),
		},
		devices: [],
		 */
		if (res.length === 0) {
			c = new Device({
				numDevices: 1,
				created: getTime(),
				devices: [statusUpdateObj(ip, alias)],
			});

			console.log(`RegisterGet: ${res}`);
			c.save((err) => {
				if (err) {
					console.log(err);
				} else {
					console.log(`Saved: ${c}`);
				}
			});

		} else {
			let lastEntry = res[0];
			//push new obj on
			lastEntry.numDevices++;
			lastEntry.devices.push(statusUpdateObj(ip, alias, lastEntry.devices.length));
			console.log(`RegisterGet: ${res}`);
			lastEntry.save((err) => {
				if (err) {
					console.log(err);
				} else {
					console.log(`Saved: ${res}`);
				}
			});

		}



	});
};
module.exports = {
	validCmpRegister,
	getStatus,
};
