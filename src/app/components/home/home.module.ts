import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home.component";
import {FingerMirrorComponent} from "../finger-mirror/finger-mirror.component";
import {RealtimeModule} from "../realtime/realtime.module";
import {WeatherModule} from "../weather/weather.module";
import {VgCoreModule} from "videogular2/core";
import {VgControlsModule} from "videogular2/controls";
import {VgOverlayPlayModule} from "videogular2/overlay-play";
import {VgBufferingModule} from "videogular2/buffering";
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
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  exports: [
    HomeComponent,
    FingerMirrorComponent
  ]
})
export class HomeModule { }
