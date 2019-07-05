import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  timeout: any = 0;
  constructor(private router: Router) {}

  ngOnInit() {}

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
}
