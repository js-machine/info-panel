import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {RealtimeModule} from "./components/realtime/realtime.module";
import localeRu from '@angular/common/locales/ru';
import {registerLocaleData} from "@angular/common";
import {WeatherModule} from "./components/weather/weather.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RealtimeModule,
    WeatherModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'ru'}],
  bootstrap: [AppComponent]
})
export class AppModule { }

registerLocaleData(localeRu, 'ru');
