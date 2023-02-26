import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class AppListComponent {
  constructor(private router: Router) {}

  goToHome(): void {
    this.router.navigate(['/']);
  }

  goToForecast(): void {
    this.router.navigate(['/forecast']);
  }

  goToGame(): void {
    this.router.navigate(['/game']);
  }

  goToMirror(): void {
    this.router.navigate(['/mirror']);
  }
}
