import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgBufferingModule } from 'videogular2/buffering';
import { MyVideoComponent } from "./myvideo.component";

@NgModule({
  declarations: [
    MyVideoComponent
  ],
  imports: [
    CommonModule,
    VgCoreModule,
    VgControlsModule,
    VgBufferingModule
  ],
  exports: [
    MyVideoComponent
  ]
})
export class MyVideoModule { }