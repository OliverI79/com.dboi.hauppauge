'use strict';

const Homey = require('homey');
const HauppaugeDevice = require('../../lib/hauppaugedevice');

class Hauppauge_01556_Device extends HauppaugeDevice {
	
	onInit() {
        super.onInit();
    }

    async onMeshInit() {
        
        super.onMeshInit();

        //this.enableDebug();
        //this.printNode();

        this.registerCapability('onoff', 'SWITCH_BINARY');

        this.registerCapability('measure_power', 'METER');

        this.registerCapability('meter_power', 'METER')        

    }  
}
module.exports = Hauppauge_01556_Device;
