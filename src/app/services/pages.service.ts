import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PagesService implements OnDestroy {
  timeout: any = 0;

  constructor(private router: Router) {}

  change(page: string) {
    if (page === 'home') {
      if (this.timeout > 0) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(this.goHome.bind(this), 60000);
    } else if (page === 'list') {
      if (this.timeout > 0) {
        clearTimeout(this.timeout);
        this.timeout = 0;
      }
      this.goToAppList();
    } else {
      return;
    }
  }

  ngOnDestroy() {
    clearTimeout(this.timeout);
  }

  goToAppList(): void {
    this.router.navigate(['/apps']);
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}
