import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RealtimeComponent } from './realtime.component';

@NgModule({
  declarations: [RealtimeComponent],
  imports: [HttpClientModule, HttpClientJsonpModule, CommonModule],
  exports: [RealtimeComponent]
})
export class RealtimeModule {}
