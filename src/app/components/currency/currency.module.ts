import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CurrencyComponent } from './currency.component';

@NgModule({
  declarations: [CurrencyComponent],
  imports: [HttpClientModule, HttpClientJsonpModule, CommonModule],
  exports: [CurrencyComponent]
})
export class CurrencyModule {}
