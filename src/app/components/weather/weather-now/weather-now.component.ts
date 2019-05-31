import { Component, OnInit } from '@angular/core';
import {WeatherApiService} from "../api/weather-api.service";
import {WeatherModel} from "../model/weather.model";
import { interval, Observable } from "rxjs";
import {flatMap} from "rxjs/operators";

@Component({
  selector: 'info-weather-now',
  templateUrl: './weather-now.component.html',
  styleUrls: ['./weather-now.component.scss']
})
export class WeatherNowComponent implements OnInit {

  constructor(private api: WeatherApiService) { }

  weather: WeatherModel;
  weather$: Observable<WeatherModel>;

  ngOnInit() {
    this.api.getWeather().subscribe((weather) => {
      this.weather = weather;
    })

    this.weather$ = interval(3600000).pipe(flatMap(() => {
      return this.api.getWeather()
    }));

    this.weather$.subscribe((weather) => {
      this.weather = weather;
    })
  }

  getIconUrl(icon: string): string {
    const url = `http://openweathermap.org/img/w/${icon}.png`;
    return url;
  }
}
