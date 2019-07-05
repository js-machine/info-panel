import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CurrencyModule } from '../currency/currency.module';
import { LogoModule } from '../logo/logo.module';
import { MyVideoModule } from '../myvideo/myvideo.module';
import { RealtimeModule } from '../realtime/realtime.module';
import { WeatherModule } from '../weather/weather.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [BrowserModule, CommonModule, RealtimeModule, WeatherModule, LogoModule, MyVideoModule, CurrencyModule],
  exports: [HomeComponent]
})
export class HomeModule {}
