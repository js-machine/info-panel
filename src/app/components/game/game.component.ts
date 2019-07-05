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
  timeout: any = 0;

  changePage(page: string) {
    if (page === 'home') {
      if (this.timeout > 0) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(this.goHome.bind(this), 120000);
    } else if (page === 'list') {
      if (this.timeout > 0) {
        clearTimeout(this.timeout);
        this.timeout = 0;
      } else {
        this.goToAppList();
      }
    } else {
      return;
    }
  }

  goToAppList(): void {
    this.router.navigate(['/apps']);
  }

  goHome(): void {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    const game = new Game({
      gameContainer: document.getElementById('game-container'),
      title: '',
      desc: ''
    });
  }
}
