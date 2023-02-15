import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LogoComponent } from './logo.component';

@NgModule({
  declarations: [LogoComponent],
  imports: [BrowserModule, CarouselModule, BrowserAnimationsModule],
  exports: [LogoComponent],
  bootstrap: [LogoComponent]
})
export class LogoModule {}
