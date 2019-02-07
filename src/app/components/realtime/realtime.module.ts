import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import {RealtimeComponent} from "./realtime.component";
import { CommonModule } from '@angular/common';
import {WeatherNowComponent} from "./weather/weather-now/weather-now.component";
import {WeatherForecastComponent} from "./weather/weather-forecast/weather-forecast.component";
import {CurrencyComponent} from "./currency/currency.component";

@NgModule({
  declarations: [
    RealtimeComponent,
    WeatherNowComponent,
    WeatherForecastComponent,
    CurrencyComponent
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
