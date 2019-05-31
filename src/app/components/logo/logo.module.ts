import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {LogoComponent} from "./logo.component";
import { CarouselModule, MDBBootstrapModule  } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    LogoComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    CarouselModule
  ],
  exports: [
    LogoComponent
  ],
  bootstrap: [LogoComponent]
})
export class LogoModule { }
