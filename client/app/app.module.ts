import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { DeviceDetailComponent } from './device-detail.component';
import { DevicesComponent } from './devices.component';
import { DeviceService } from './device.service';
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    DeviceDetailComponent,
    DevicesComponent
  ],
  providers: [
    DeviceService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
