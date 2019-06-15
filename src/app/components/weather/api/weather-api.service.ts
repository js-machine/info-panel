import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ForecastModel } from '../model/forecast.model';
import { WeatherModel } from '../model/weather.model';
import { forecastDtoToModel, weatherDtoToModel } from './dto-converter';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  readonly API_URL = 'http://api.openweathermap.org';
  readonly CITY_ID = 625665;
  readonly APP_ID = '52827ce67cdeeaaf0c60c4b244f1bf10';

  constructor(private httpClient: HttpClient) {}

  getWeather(): Observable<WeatherModel | null> {
    return this.httpClient
      .jsonp(`${this.API_URL}/data/2.5/weather?id=${this.CITY_ID}&units=metric&APPID=${this.APP_ID}`, 'callback')
      .pipe(
        map(weatherDto => weatherDtoToModel(weatherDto)),
        catchError(() => {
          console.log('Weather loading failed!');
          return of(null);
        })
      );
  }

  getForecast(): Observable<ForecastModel[] | null> {
    return this.httpClient
      .jsonp(
        `${this.API_URL}/data/2.5/forecast/daily?id=${this.CITY_ID}&units=metric&APPID=${this.APP_ID}&cnt=5`,
        'callback'
      )
      .pipe(
        map(forecastDto => forecastDtoToModel(forecastDto)),
        catchError(() => {
          console.log('Forecast loading failed!');
          return of(null);
        })
      );
  }

  getIconUrl(icon: string): string {
    const url = `http://openweathermap.org/img/w/${icon}.png`;
    return url;
  }
}
