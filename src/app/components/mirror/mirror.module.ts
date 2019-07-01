import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FacetrackComponent } from './facetrack/facetrack.component';
import { MirrorComponent } from './mirror.component';

@NgModule({
  declarations: [MirrorComponent, FacetrackComponent],
  imports: [BrowserModule, CommonModule],
  exports: [MirrorComponent]
})
export class MirrorModule {}
