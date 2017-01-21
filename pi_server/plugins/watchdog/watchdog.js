const statusUpdateObj = (status = 'unknown!', update = 'unknown!', last_restart = 'Jan 19 1992 13:23:53', currentTime = 'Jan 19 1993 13:23:53', alias = 'reallyGreatComputer', ip = '192.156.0.2') => {
	let obj = {
		status,
		update,
		last_restart,
		currentTime,
		alias,
		ip,
	};

	return obj;
};

module.exports = {
	statusUpdateObj
};
