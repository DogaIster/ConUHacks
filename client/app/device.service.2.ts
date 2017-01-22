/**
 * Created by DogaIster on 2017-01-22.
 */
import { Injectable } from '@angular/core';
import { registeredDevices } from './device';
import { DEVICES } from './mock.devices';

@Injectable()
export class DeviceService{
  getDevices(): registeredDevices[]{
    return DEVICES;
  }
}
