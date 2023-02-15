import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { WeatherApiService } from '../api/weather-api.service';
import { ForecastModel } from '../model/forecast.model';

@Component({
  selector: 'info-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss'],
})
export class WeatherForecastComponent implements OnInit, OnDestroy {
  forecast: ForecastModel[];
  forecast$: Observable<ForecastModel[]>;
  private subscription: Subscription;

  constructor(private api: WeatherApiService) {}

  ngOnInit() {
    this.api.getForecast().subscribe((forecast) => {
      this.forecast = forecast;
    });

    this.forecast$ = interval(3600000).pipe(
      flatMap(() => {
        return this.api.getForecast();
      })
    );

    this.subscription = this.forecast$.subscribe((forecast) => {
      this.forecast = forecast;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getIconUrl(icon: string): string {
    const url = this.api.getIconUrl(icon);
    return url;
  }
}
