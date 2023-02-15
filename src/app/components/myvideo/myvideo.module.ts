import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { MyVideoComponent } from './myvideo.component';

@NgModule({
  declarations: [MyVideoComponent],
  imports: [CommonModule, VgCoreModule],
  exports: [MyVideoComponent]
})
export class MyVideoModule {}
