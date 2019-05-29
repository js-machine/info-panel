import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ForecastComponent} from "./forecast.component";
import {WeatherModule} from "../weather/weather.module";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
    ForecastComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    WeatherModule,
  ],
  exports: [
    ForecastComponent
  ]
})
export class ForecastModule { }
