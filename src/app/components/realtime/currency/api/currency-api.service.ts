import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {currencyDtoToModel} from "./dto-converter";
import {of, Observable} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {CurrencyModel} from "../model/currency.model";

@Injectable({
  providedIn: 'root'
})
export class CurrencyApiService {

  readonly API_URL = "http://www.nbrb.by/API/ExRates/Rates?Periodicity=0";

  constructor(private httpClient: HttpClient) {}

  getCurrency(): Observable<Array<CurrencyModel> | null> {
    return this.httpClient.get(this.API_URL).pipe(
      map(currencyDto => currencyDtoToModel(currencyDto)),
      catchError(() => {
        console.log("Currency loading failed!");
        return of(null);
      })
    );
  }
}
