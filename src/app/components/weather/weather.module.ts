import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {WeatherNowComponent} from "../weather/weather-now/weather-now.component";
import {WeatherForecastComponent} from "../weather/weather-forecast/weather-forecast.component";

@NgModule({
  declarations: [
    WeatherNowComponent,
    WeatherForecastComponent
  ],
  imports: [
    HttpClientModule,
    HttpClientJsonpModule,
    CommonModule
  ],
  exports: [
    
    WeatherNowComponent,
    WeatherForecastComponent
  ]
})
export class WeatherModule { }
