/**
 * Created by DogaIster on 2017-01-22.
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { DeviceService } from './device.service';
import { registeredDevices } from './device';
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'device-detail',
  templateUrl: 'device-detail.component.html',
  styleUrls: [ 'device-detail.component.css' ]
})

export class DeviceDetailComponent implements OnInit{
  device: registeredDevices;

  constructor(
    private deviceService: DeviceService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.deviceService.getDevice(+params['id']))
      .subscribe(device => this.device = device);
  }
}
