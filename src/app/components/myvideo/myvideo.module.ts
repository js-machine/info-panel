import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import {MyVideoComponent} from "./myvideo.component";
import { CommonModule } from '@angular/common';
import {VgCoreModule} from "videogular2/core";
import {VgControlsModule} from "videogular2/controls";
import {VgOverlayPlayModule} from "videogular2/overlay-play";
import {VgBufferingModule} from "videogular2/buffering";

@NgModule({
  declarations: [
    MyVideoComponent
  ],
  imports: [
    HttpClientModule,
    HttpClientJsonpModule,
    CommonModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  exports: [
    MyVideoComponent
  ]
})
export class MyVideoModule { }