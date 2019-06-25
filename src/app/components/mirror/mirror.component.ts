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

  constructor(private router: Router) {}

  goToAppList(): void {
    this.router.navigate(['/apps']);
  }

  ngOnInit(): void {}
}
