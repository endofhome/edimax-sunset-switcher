const smartplug = require('edimax-smartplug');

class EdimaxClient {
    constructor() {
        this.options = { 
            timeout: 10000,
            host: process.env.EDIMAX_HOST,
            username: process.env.EDIMAX_USERNAME,
            password: process.env.EDIMAX_PASSWORD
	}
    }

    switchOn() {
        smartplug.setSwitchState(true, this.options).catch(function(e) {console.log("Request to turn on failed: ", e)});
    }

    switchOff() {
        smartplug.setSwitchState(false, this.options).catch(function(e) {console.log("Request to turn off failed: ", e)});
    }

    lampIsOff() {
        return !smartplug.getSwitchState(this.options).catch(function(e) {console.log("Request to check state failed: ", e)});
    }
}

module.exports = EdimaxClient;