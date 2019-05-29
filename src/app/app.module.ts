import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import localeRu from '@angular/common/locales/ru';
import {registerLocaleData} from "@angular/common";
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material';
import {AppListComponent} from "./components/app-list/app-list.component";

import {HomeModule} from "./components/home/home.module";
import {ForecastModule} from "./components/forecast/forecast.module";

@NgModule({
  declarations: [
    AppComponent,
    AppListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HomeModule,
    ForecastModule,
    MatIconModule,
    MatGridListModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'ru'}],
  bootstrap: [AppComponent]
})
export class AppModule { }

registerLocaleData(localeRu, 'ru');
