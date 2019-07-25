import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagesService } from '../../../services/pages.service';

@Component({
  selector: 'mirror',
  templateUrl: './mirror.component.html',
  styleUrls: ['./mirror.component.scss']
})
export class MirrorComponent implements OnInit {
  public width = 1080;
  public height = 810;
  private page;

  constructor(private router: Router) {
    this.page = new PagesService(this.router);
  }

  ngOnInit(): void {}
}
