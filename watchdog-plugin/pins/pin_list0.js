var gpio = require('rpi-gpio');
var sleep = require('sleep');

gpio.setup(3, gpio.DIR_OUT, write);
gpio.setup(5, gpio.DIR_OUT, write);
gpio.setup(7, gpio.DIR_OUT, write);
gpio.setup(29, gpio.DIR_OUT, write);

while (1) {
	sleep.sleep(0.5)
	write(3)
	sleep.sleep(0.5)
	write(5)
	sleep.sleep(0.5)
	write(7)
	sleep.sleep(0.5)
	write(29)
}

function write(num) {
	gpio.write(num, false, function (err) {
		if (err) throw err;
		console.log('Written to pin');
	});
	sleep.sleep(0.5)
	gpio.write(num, true, function (err) {
		if (err) throw err;
		console.log('Written to pin');
	});
	sleep.sleep(0.5)
	gpio.write(num, false, function (err) {
		if (err) throw err;
		console.log('Written to pin');
	});
}
