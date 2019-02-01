import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {toModel} from "./dto-converter";
import {of, Observable} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {WeatherModel} from "../model/weather.model";

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  readonly API_URL = "http://api.openweathermap.org";
  readonly CITY_ID = 625665;
  readonly APP_ID = "52827ce67cdeeaaf0c60c4b244f1bf10";

  constructor(private httpClient: HttpClient) {}

  getWeather(): Observable<WeatherModel | null> {
    return this.httpClient.jsonp(`${this.API_URL}/data/2.5/weather?id=${this.CITY_ID}&units=metric&APPID=${this.APP_ID}`, "callback").pipe(
      map(weatherDto => toModel(weatherDto)),
      catchError(() => {
        console.log("Weather loading failed!");
        return of(null);
      })
    );
  }
}
