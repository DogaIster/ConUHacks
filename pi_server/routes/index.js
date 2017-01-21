const express = require('express');

const router = express.Router();

const index = (req, res) => {
	res.render('index', {
		title: 'instantPi',
	});
};



const getData = (req, res) => {
	console.log(req.body);
	res.send([{
		computerNumber: '1',
		qwedqwe: 'dawedqawefwef'
	}, {
		computerNumber: '2',
		qwedqwe: 'dawedqawefwef'
	}, {
		computerNumber: '3',
		qwedqwe: 'dawedqawefwef'
	}, {
		computerNumber: '4',
		qwedqwe: 'dawedqawefwef'
	}]);
};

const regComp = (req, res) => {
	console.log(req.body);
	res.send({
		err: 'unable to register computer'
	});
};


router.post('/regComp', regComp);
router.get('/', index);
router.get('/getData', getData);


module.exports = router;
