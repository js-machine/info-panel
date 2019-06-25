import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MirrorComponent } from './mirror.component';

@NgModule({
  declarations: [MirrorComponent],
  imports: [CommonModule],
  exports: [MirrorComponent]
})
export class MirrorModule {}
