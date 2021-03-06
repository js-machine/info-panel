import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CurrencyModel } from '../model/currency.model';
import { currencyDtoToModel } from './dto-converter';

@Injectable({
  providedIn: 'root'
})
export class CurrencyApiService {
  readonly API_URL = 'https://www.instagram.com/fly.belarus';

  constructor(private httpClient: HttpClient) {}

  getCurrency(): Observable<CurrencyModel[] | null> {
    const headers = { Accept: 'text/html' };
    return this.httpClient.get(this.API_URL, { headers }).pipe(
      map(currencyDto => currencyDtoToModel(currencyDto)),
      catchError(() => {
        console.log('Currency loading failed!');
        return of(null);
      })
    );
  }
}
