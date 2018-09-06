'use strict';

const Homey = require('homey');
const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class HauppaugeDevice extends ZwaveDevice {
    
	onInit() {
        super.onInit();

        this.debugLog('Hauppauge Device has been inited');

		// enable debugging
        this.enableDebug();
        //this.printNode();
    }

    onMeshInit() {

	}

    debugLog(logMessage) {
        this.log(logMessage + ' - ', this.getName() + ' (' + this.getClass() + ')');
    }

}

module.exports = HauppaugeDevice;