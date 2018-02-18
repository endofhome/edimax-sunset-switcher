const request = require('sync-request');
const EdimaxClient = require('./edimaxClient');
const edimaxClient = new EdimaxClient();

const sunsetISO8601 = () => {
    const lat = process.env.EDIMAX_LAT;
    const lng = process.env.EDIMAX_LNG;
    const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0`;

    const res = request('GET', url).getBody();
    return JSON.parse(res.toString()).results.sunset;
};

const withinThirtyMinsOfSunset = () => {
    const now = new Date().valueOf();
    const sunset = new Date(sunsetISO8601()).valueOf();
    return (now >= (sunset - 1800000));
};

edimaxClient.lampIsOn().then(lampIsOn => {
    if (withinThirtyMinsOfSunset() && !lampIsOn) {
        console.log("Switching on!");
        edimaxClient.switchOn();
    }
});
