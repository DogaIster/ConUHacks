import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { registeredDevices } from './device';
import { DeviceService } from './device.service'

@Component({
  moduleId: module.id,
  selector: 'my-devices',
  templateUrl: 'devices.component.html',
  styleUrls: [ 'devices.component.css' ]
})
export class DevicesComponent implements OnInit{
  devices: registeredDevices[];
  selectedDevice: registeredDevices;

  constructor(
    private router: Router,
    private deviceService: DeviceService) {}

  getDevices(): void {
    this.deviceService.getDevices().then(devices => this.devices = devices);
  }

  ngOnInit(): void {
    this.getDevices();
  }

  onSelect(registereddevices: registeredDevices): void{
    this.selectedDevice = registereddevices;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedDevice.id]);
  }
}








