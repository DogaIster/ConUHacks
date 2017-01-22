/**
 * Created by DogaIster on 2017-01-22.
 */
import {Injectable } from '@angular/core';
import { registeredDevices } from './device';
import { DEVICES } from './mock.devices';

@Injectable()
export class DeviceService{
  getDevices(): Promise<registeredDevices[]> {
    return Promise.resolve(DEVICES);
  }

  getDevicesSlowly(): Promise<registeredDevices[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getDevices()), 2000);
    });
  }

  getDevice(id:number): Promise<registeredDevices> {
    return this.getDevices()
      .then(devices => devices.find(device => device.id === id));
  }
}
