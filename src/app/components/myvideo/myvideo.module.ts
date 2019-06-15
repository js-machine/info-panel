import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VgBufferingModule } from 'videogular2/buffering';
import { VgControlsModule } from 'videogular2/controls';
import { VgCoreModule } from 'videogular2/core';
import { MyVideoComponent } from './myvideo.component';

@NgModule({
  declarations: [MyVideoComponent],
  imports: [CommonModule, VgCoreModule, VgControlsModule, VgBufferingModule],
  exports: [MyVideoComponent]
})
export class MyVideoModule {}
