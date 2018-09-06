'use strict';

const Homey = require('homey');

class HauppaugeDriver extends Homey.Driver {
	
	onInit() {
		this.debugLog('Hauppauge Driver has been inited');
    }

    debugLog(logMessage) {
        this.log(logMessage);
    }

}

module.exports = HauppaugeDriver;