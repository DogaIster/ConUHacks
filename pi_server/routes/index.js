const express = require('express');
const plugins = require('../plugins/plugins.json');
const path = require('path');
const watchdog = (() => {
	const p = plugins.names;
	return require(path.join(__dirname, `../plugins/${p}/${p}`));

})();

const router = express.Router();

const index = (req, res) => {
	res.render('index', {
		title: 'instantPi',
	});
};



const getData = (req, res) => {
	watchdog.getStatus((data) => {
		res.send(data);
	});
};

const regComp = (req, res) => {
	console.log(req.body);
	//make async
	watchdog.validCmpRegister(req.body, (data) => {
		if (data) {
			return res.send({
				err: ''
			});
		} else {
			return res.send({
				err: `Unable to register computer IP:${req.body.ip}, Alias:${req.body.alias}`
			});
		}

	});
};


router.post('/regComp', regComp);
router.get('/', index);
router.get('/getData', getData);


module.exports = router;
