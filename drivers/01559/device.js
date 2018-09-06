'use strict';

const Homey = require('homey');
const HauppaugeDevice = require('../../lib/hauppaugedevice');

class Hauppauge_01559_Device extends HauppaugeDevice {

  async onMeshInit() {
	super.onMeshInit();
    this.registerCapability('alarm_contact', 'NOTIFICATION');
    this.registerCapability('alarm_battery', 'BATTERY');
    this.registerCapability('measure_battery', 'BATTERY', {
      getOpts: {
        getOnOnline: true,
      }
    });
  }
  
}
module.exports = Hauppauge_01559_Device;
