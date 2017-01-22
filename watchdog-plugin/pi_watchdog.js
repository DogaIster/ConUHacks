const ping = require("net-ping");
const session = ping.createSession();

const pingCmp = (ip) => {

	session.pingHost(ip, function (error, target) {
		if (error) {
			if (error instanceof ping.RequestTimedOutError) {
				return {
					alive: false,
					reason: "Not alive"
				}
			} else {
				console.log(target + ": " + error.toString());
				return {
					alive: false,
					reason: target + ": " + error.toString(),
				}
			}
		} else {

			console.log(target + ": Alive");
			return {
				alive: true,
				reason: "",
			}
		}
	})
}

module.exports = {
	pingCmp,
}


