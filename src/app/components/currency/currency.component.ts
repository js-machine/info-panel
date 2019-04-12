import { Component, OnInit } from '@angular/core';
import {CurrencyApiService} from "./api/currency-api.service";
import {CurrencyModel} from "./model/currency.model";

@Component({
  selector: 'info-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  readonly ASSETS_PATH = "../../../../assets/";

  private mapping: any;

  constructor(private api: CurrencyApiService) {
    this.mapping = {
      "USD": "usa",
      "EUR": "eu",
      "RUB": "rus"
    };
  }

  currencies: Array<CurrencyModel>;

  ngOnInit() {
    this.api.getCurrency().subscribe((values) => {
      this.currencies = values;
    })
  }

  getImagePath(currency: CurrencyModel): string {
    const image = this.mapping[currency.code];
    return `${this.ASSETS_PATH}/${image}.png`;
  }
}
