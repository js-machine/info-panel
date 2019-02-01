import { Component, OnInit } from '@angular/core';
import {WeatherApiService} from "./api/weather-api.service";
import {WeatherModel} from "./model/weather.model";

@Component({
  selector: 'info-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(private api: WeatherApiService) { }

  weather: WeatherModel;

  ngOnInit() {
    this.api.getWeather().subscribe((weather) => {
      this.weather = weather;
    })
  }
}
