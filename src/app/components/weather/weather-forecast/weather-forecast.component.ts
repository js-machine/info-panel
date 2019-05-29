import { Component, OnInit } from '@angular/core';
import {WeatherApiService} from "../api/weather-api.service";
import {ForecastModel} from "../model/forecast.model";

@Component({
  selector: 'info-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss','../../home/home.component.scss','../weather-now/weather-now.component.scss']
})
export class WeatherForecastComponent implements OnInit {

  constructor(private api: WeatherApiService) { }

  forecast: Array<ForecastModel>;

  ngOnInit() {
    this.api.getForecast().subscribe((forecast) => {
      this.forecast = forecast;
    })
  }

  getIconUrl(icon: string): string {
    const url = this.api.getIconUrl(icon);
    return url;
  }
}
