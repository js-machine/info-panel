import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GameComponent } from './game.component';

@NgModule({
  declarations: [GameComponent],
  imports: [CommonModule],
  exports: [GameComponent]
})
export class GameModule {}
