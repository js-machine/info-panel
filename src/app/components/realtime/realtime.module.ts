import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import {RealtimeComponent} from "./realtime.component";
import {WeatherComponent} from "./weather/weather.component";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    RealtimeComponent,
    WeatherComponent
  ],
  imports: [
    HttpClientModule,
    HttpClientJsonpModule,
    CommonModule
  ],
  exports: [
    RealtimeComponent
  ]
})
export class RealtimeModule { }
