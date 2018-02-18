const smartplug = require('edimax-smartplug');

class EdimaxClient {
    constructor() {
        this.options = { 
            timeout: 10000,
            host: process.env.EDIMAX_HOST,
            username: process.env.EDIMAX_USERNAME,
            password: process.env.EDIMAX_PASSWORD
	};
    }

    switchOn() {
        smartplug.setSwitchState(true, this.options).catch(e =>  { console.log("Request to turn on failed: ", e); });
    }

    switchOff() {
        smartplug.setSwitchState(false, this.options).catch(e => { console.log("Request to turn off failed: ", e); });
    }

    lampIsOn() {
        return smartplug.getSwitchState(this.options);
    }
}

module.exports = EdimaxClient;
