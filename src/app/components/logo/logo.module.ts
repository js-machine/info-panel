import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {LogoComponent} from "./logo.component";
import { CarouselModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    LogoComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule
  ],
  exports: [
    LogoComponent
  ],
  bootstrap: [LogoComponent]
})
export class LogoModule { }
