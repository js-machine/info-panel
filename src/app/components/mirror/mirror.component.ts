import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../services/pages.service';

@Component({
  selector: 'mirror',
  templateUrl: './mirror.component.html',
  styleUrls: ['./mirror.component.scss'],
  providers: [PagesService]
})
export class MirrorComponent implements OnInit {
  public width = 1080;
  public height = 810;

  constructor(private page: PagesService) {}

  ngOnInit(): void {}
}
