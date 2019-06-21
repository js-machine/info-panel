import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Game from 'game-2048';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  constructor(private router: Router) {}

  goToAppList(): void {
    this.router.navigate(['/apps']);
  }

  ngOnInit(): void {
    const game = new Game({
      gameContainer: document.getElementById('game-container'),
      title: '',
      desc: ''
    });
  }
}
