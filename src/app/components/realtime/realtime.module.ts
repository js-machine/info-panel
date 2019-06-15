import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CurrencyComponent } from '../currency/currency.component';
import { RealtimeComponent } from './realtime.component';

@NgModule({
  declarations: [RealtimeComponent, CurrencyComponent],
  imports: [HttpClientModule, HttpClientJsonpModule, CommonModule],
  exports: [RealtimeComponent]
})
export class RealtimeModule {}
