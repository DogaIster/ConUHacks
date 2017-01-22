/**
 * Created by DogaIster on 2017-01-22.
 */
import { Component, OnInit } from '@angular/core';
import { registeredDevices } from './device';
import { DeviceService } from './device.service';

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  devices: registeredDevices[] = [];

  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.deviceService.getDevices()
      .then(devices => this.devices = devices.slice(1, 5));
  }
}

