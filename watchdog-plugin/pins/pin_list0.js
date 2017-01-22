var gpio = require('rpi-gpio');
var sleep = require('sleep');

gpio.setup(3, gpio.DIR_OUT);
gpio.setup(5, gpio.DIR_OUT);
gpio.setup(7, gpio.DIR_OUT);
gpio.setup(29, gpio.DIR_OUT);

function write(num) {
	gpio.write(num, false, function (err) {
		if (err) throw err;
		console.log('Written to pin');
	});
	sleep.sleep(1)
	gpio.write(num, true, function (err) {
		if (err) throw err;
		console.log('Written to pin');
	});
	sleep.sleep(1)
	gpio.write(num, false, function (err) {
		if (err) throw err;
		console.log('Written to pin');
	});
}


while (1) {
	sleep.sleep(1)
	write(3)
	sleep.sleep(1)
	write(5)
	sleep.sleep(1)
	write(7)
	sleep.sleep(1)
	write(29)
}
