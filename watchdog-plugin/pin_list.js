var pinlist = [3,5,7,29];

var gpio = require('rpi-gpio');

function write(pin,state) {
gpio.write(pin, state, function(err) {
        if (err) throw err;
        console.log('Written to pin');
    })}
 
module.exports = function(pin,state) {
gpio.setup(pin, gpio.DIR_OUT, write);
}
