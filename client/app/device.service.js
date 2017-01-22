"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by DogaIster on 2017-01-22.
 */
var core_1 = require('@angular/core');
var mock_devices_1 = require('./mock.devices');
var DeviceService = (function () {
    function DeviceService() {
    }
    DeviceService.prototype.getDevices = function () {
        return Promise.resolve(mock_devices_1.DEVICES);
    };
    DeviceService.prototype.getDevicesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () { return resolve(_this.getDevices()); }, 2000);
        });
    };
    DeviceService.prototype.getDevice = function (id) {
        return this.getDevices()
            .then(function (devices) { return devices.find(function (device) { return device.id === id; }); });
    };
    DeviceService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DeviceService);
    return DeviceService;
}());
exports.DeviceService = DeviceService;
//# sourceMappingURL=device.service.js.map