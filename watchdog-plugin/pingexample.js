var ping = require("net-ping");

var session = ping.createSession ();

module.exports = function (ip){

session.pingHost (ip, function (error, target) {
    if (error)
        if (error instanceof ping.RequestTimedOutError)
            console.log (target + ": Not alive");
        else
            console.log (target + ": " + error.toString ());
    else
        console.log (target + ": Alive");
});	
}