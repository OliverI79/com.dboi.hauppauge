'use strict';

const Homey = require('homey');
const HauppaugeDevice = require('../../lib/hauppaugedevice');

class Hauppauge_01563_Device extends HauppaugeDevice {

  async onMeshInit() {
	super.onMeshInit();
    this.registerCapability('alarm_water', 'SENSOR_BINARY');
    this.registerCapability('alarm_battery', 'BATTERY');
    this.registerCapability('measure_battery', 'BATTERY', {
      getOpts: {
        getOnOnline: true,
      }
    });
  }
  
}
module.exports = Hauppauge_01563_Device;
