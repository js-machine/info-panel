import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FacetrackComponent } from './facetrack/facetrack.component';
import { ThreeComponent } from './facetrack/three/three.component';
import { MirrorComponent } from './mirror.component';

@NgModule({
  declarations: [MirrorComponent, FacetrackComponent, ThreeComponent],
  imports: [BrowserModule, CommonModule],
  exports: [MirrorComponent]
})
export class MirrorModule {}
