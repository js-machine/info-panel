import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LogoComponent } from "./logo.component";
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    LogoComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  exports: [
    LogoComponent
  ],
  bootstrap: [LogoComponent]
})
export class LogoModule { }
