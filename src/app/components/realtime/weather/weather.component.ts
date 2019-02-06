import { Component, OnInit } from '@angular/core';
import {WeatherApiService} from "./api/weather-api.service";
import {WeatherModel} from "./model/weather.model";
import {ForecastModel} from "./model/forecast.model";

@Component({
  selector: 'info-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(private api: WeatherApiService) { }

  weather: WeatherModel;
  forecast: ForecastModel;

  ngOnInit() {
    this.api.getWeather().subscribe((weather) => {
      this.weather = weather;
    })

    this.api.getForeacast().subscribe((forecast) => {
      this.forecast = forecast;
    })
  }

  getIconUrl(icon: string): string {
    const url = `http://openweathermap.org/img/w/${icon}.png`;
    return url;
  }
}
