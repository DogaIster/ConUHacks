var express = require('express');
var router = express.Router();



router.get('/', function (req, res) {
	res.render('index', {
		title: 'instantPi',
	});
});

router.post('/doQuery', doQuery);
router.post('/uploadLog', upload.single('theFile'), uploadLog);
router.get('/dropDB', dropDB);
router.get('/logValues', function (req, res) {
	logsCollection.count({}, function (err, entryCount) {
		filesCollection.count({}, function (err, fileCount) {
			res.send({
				fileValue: fileCount,
				entryValue: entryCount
			});
		});

	});
});

module.exports = router;
