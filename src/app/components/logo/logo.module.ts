import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {LogoComponent} from "./logo.component";
import { CarouselModule, WavesModule } from 'angular-bootstrap-md'

@NgModule({
  declarations: [
    LogoComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    WavesModule
  ],
  exports: [
    LogoComponent
  ]
})
export class LogoModule { }
