import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import {RealtimeComponent} from "./realtime.component";
import { CommonModule } from '@angular/common';
import {CurrencyComponent} from "../currency/currency.component";

@NgModule({
  declarations: [
    RealtimeComponent,
    CurrencyComponent
  ],
  imports: [
    HttpClientModule,
    HttpClientJsonpModule,
    CommonModule
  ],
  exports: [
    RealtimeComponent
  ]
})
export class RealtimeModule { }
