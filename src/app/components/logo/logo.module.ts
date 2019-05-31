import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {LogoComponent} from "./logo.component";


@NgModule({
  declarations: [
    LogoComponent
  ],
  imports: [
    HttpClientModule,
    HttpClientJsonpModule,
    CommonModule
  ],
  exports: [
    LogoComponent
  ]
})
export class LogoModule { }
