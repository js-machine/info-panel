import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {WeatherNowComponent} from "../weather/weather-now/weather-now.component";
import {TemperatureComponent} from "./temperature-now/temperature-now.component";
import {WeatherForecastComponent} from "../weather/weather-forecast/weather-forecast.component";

@NgModule({
  declarations: [
    TemperatureComponent,
    WeatherNowComponent,
    WeatherForecastComponent
  ],
  imports: [
    HttpClientModule,
    HttpClientJsonpModule,
    CommonModule
  ],
  exports: [
    TemperatureComponent,
    WeatherNowComponent,
    WeatherForecastComponent
  ]
})
export class WeatherModule { }
