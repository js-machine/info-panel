import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { CurrencyApiService } from './api/currency-api.service';
import { CurrencyModel } from './model/currency.model';

@Component({
  selector: 'info-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  readonly ASSETS_PATH = '../../../../assets/';

  private mapping: any;

  constructor(private api: CurrencyApiService) {
    this.mapping = {
      USD: 'usa',
      EUR: 'eu',
      RUB: 'rus'
    };
  }

  currencies: CurrencyModel[];
  currencies$: Observable<CurrencyModel[]>;

  ngOnInit() {
    this.api.getCurrency().subscribe(values => {
      this.currencies = values;
    });

    this.currencies$ = interval(3600000).pipe(
      flatMap(() => {
        return this.api.getCurrency();
      })
    );

    this.currencies$.subscribe(currencies => {
      this.currencies = currencies;
    });
  }

  getImagePath(currency: CurrencyModel): string {
    const image = this.mapping[currency.code];
    return `assets/${image}.png`;
  }
}
