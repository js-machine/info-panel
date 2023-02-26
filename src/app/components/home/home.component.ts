import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PagesService } from '../../services/pages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [PagesService],
})
export class HomeComponent implements OnInit {
  now$: Observable<Date>;
  private mediaPlayer: HTMLVideoElement;

  constructor(public page: PagesService) {}

  ngOnInit() {
    this.now$ = interval(1000).pipe(map(() => new Date()));
    this.mediaPlayer = document.getElementById(
      'singleVideo'
    ) as HTMLVideoElement;
  }

  saveVideoTime() {
    if (this.mediaPlayer.currentTime !== 0) {
      sessionStorage.setItem('videoTime', String(this.mediaPlayer.currentTime));
    }
  }
}
