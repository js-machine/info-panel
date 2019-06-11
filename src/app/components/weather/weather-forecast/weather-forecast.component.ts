import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { WeatherApiService } from '../api/weather-api.service';
import { ForecastModel } from '../model/forecast.model';

@Component({
  selector: 'info-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {
  constructor(private api: WeatherApiService) {}

  forecast: ForecastModel[];
  forecast$: Observable<ForecastModel[]>;

  ngOnInit() {
    this.api.getForecast().subscribe(forecast => {
      this.forecast = forecast;
    });

    this.forecast$ = interval(3600000).pipe(
      flatMap(() => {
        return this.api.getForecast();
      })
    );

    this.forecast$.subscribe(forecast => {
      this.forecast = forecast;
    });
  }

  getIconUrl(icon: string): string {
    const url = this.api.getIconUrl(icon);
    return url;
  }
}
