const mongoose = require('mongoose');
//gettime

mongoose.connect('mongodb://localhost/test');
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

	console.log('We are connected');

	let deviceSchema = mongoose.Schema({
		status: String,
		update: String,
		last_restart: String,
		uptime: Number,
		alias: String,
		ip: String,
	});

	let Device = mongoose.model('Device', deviceSchema);


	let cmp1 = new Device(statusUpdateObj());

	cmp1.save((err, cmp1) => {
		if (err) return console.error(err);
		console.log('cmp saved');
		Device.find(function (err, devices) {
			if (err) return console.error(err);
			console.log(devices);
		})
	});


});



const statusUpdateObj = (status = 'unknown!', update = 'unknown!', last_restart = 'Jan 19 1992 13:23:53', uptime = '12349782354934', alias = 'reallyGreatComputer', ip = '192.156.0.2') => {
	let obj = {
		status,
		update,
		last_restart,
		uptime,
		alias,
		ip,
	};

	return obj;
};


const getTime = () => {
	const d = new Date();
	return d.getTime();
}

const verifyCmpRegister = (ip, alias) => {
	const ipRegex = /0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/;
	const aliasRegex = /[a-zA-Z0-9-_]{1,15}/;

}


module.exports = {
	statusUpdateObj
};
