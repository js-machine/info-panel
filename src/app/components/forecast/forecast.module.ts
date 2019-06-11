import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WeatherModule } from '../weather/weather.module';
import { ForecastComponent } from './forecast.component';

@NgModule({
  declarations: [ForecastComponent],
  imports: [BrowserModule, CommonModule, WeatherModule],
  exports: [ForecastComponent]
})
export class ForecastModule {}
