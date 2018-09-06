'use strict';

const Homey = require('homey');

class HauppaugeHomeControlApp extends Homey.App {

  onInit() {

    this.log('Hauppauge MySmartHome Z-wave app is running...');

  }

}

module.exports = HauppaugeHomeControlApp;
