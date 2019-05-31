import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home.component";
import {FingerMirrorComponent} from "../finger-mirror/finger-mirror.component";
import {RealtimeModule} from "../realtime/realtime.module";
import {WeatherModule} from "../weather/weather.module";
import {MyVideoModule} from "../myvideo/myvideo.module";
import {LogoModule} from "../logo/logo.module";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
    HomeComponent,
    FingerMirrorComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RealtimeModule,
    WeatherModule,
    LogoModule,
    MyVideoModule
  ],
  exports: [
    HomeComponent,
    FingerMirrorComponent
  ]
})
export class HomeModule { }
