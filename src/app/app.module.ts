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
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material';
import {AppListComponent} from "./components/app-list/app-list.component";
import {VgCoreModule} from "videogular2/core";
import {VgControlsModule} from "videogular2/controls";
import {VgOverlayPlayModule} from "videogular2/overlay-play";
import {VgBufferingModule} from "videogular2/buffering";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RealtimeModule,
    WeatherModule,
    MatIconModule,
    MatGridListModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'ru'}],
  bootstrap: [AppComponent]
})
export class AppModule { }

registerLocaleData(localeRu, 'ru');
