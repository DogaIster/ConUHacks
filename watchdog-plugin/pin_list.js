
var gpio = require('rpi-gpio');
var pinList = [3,5,7,9,29];
var arrayLength = pinList.length;

for (var i= 0; i < arrayLength; i++) {

    gpio.setup(pinList[i], gpio.DIR_OUT);
}

//function
for (var i= 0; i < arrayLength; i++) {
	
 gpio.write(pinList[i], true, function(err) {
        if (err) throw err;
        console.log('Written to pin');
    });
   
}




var gpio = require('rpi-gpio');
function write() {
	gpio.write(3, false, function(err) {
        if (err) throw err;
        console.log('Written to pin');
    });
}
gpio.setup(3, gpio.DIR_OUT, write);