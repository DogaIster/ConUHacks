const express = require('express');
const plugins = require('../plugins/plugins.json');
const path = require('path');
const watchdog = (() => {
	const p = plugins.names;
	return require(path.join(__dirname, `../plugins/${p}/${p}`));

})();

console.log(watchdog.statusUpdateObj());
const router = express.Router();

const index = (req, res) => {
	res.render('index', {
		title: 'instantPi',
	});
};



const getData = (req, res) => {
	console.log(req.body);
	let arr = [];
	for (var i = 0; i < 6; i++) {
		arr.push(watchdog.statusUpdateObj());
	}
	res.send(arr);
};

const regComp = (req, res) => {
	let ip;
	let alias;
	({
		ip,
		alias
	} = req.body);


	res.send({
		err: 'unable to register computer'
	});
};


router.post('/regComp', regComp);
router.get('/', index);
router.get('/getData', getData);


module.exports = router;
