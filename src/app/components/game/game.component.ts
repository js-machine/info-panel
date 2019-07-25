import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Game from 'game-2048';
import { PagesService } from '../../../services/pages.service';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  private page;

  constructor(private router: Router) {
    this.page = new PagesService(this.router);
  }

  ngOnInit(): void {
    const game = new Game({
      gameContainer: document.getElementById('game-container'),
      title: '',
      desc: ''
    });
  }
}
