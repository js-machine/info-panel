import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { WeatherForecastComponent } from '../weather/weather-forecast/weather-forecast.component';
import { WeatherNowComponent } from '../weather/weather-now/weather-now.component';
import { TemperatureComponent } from './temperature-now/temperature-now.component';

@NgModule({
  declarations: [TemperatureComponent, WeatherNowComponent, WeatherForecastComponent],
  imports: [HttpClientModule, HttpClientJsonpModule, CommonModule],
  exports: [TemperatureComponent, WeatherNowComponent, WeatherForecastComponent]
})
export class WeatherModule {
}
