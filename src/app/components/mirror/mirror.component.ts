import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mirror',
  templateUrl: './mirror.component.html',
  styleUrls: ['./mirror.component.scss']
})
export class MirrorComponent implements OnInit {
  public width = 1080;
  public height = 810;
  timeout: any = 0;

  constructor(private router: Router) {}

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

  ngOnInit(): void {}
}
