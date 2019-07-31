import { Component, OnInit, ViewChild } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PagesService } from '../../services/pages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [PagesService]
})
export class HomeComponent implements OnInit {
  private mediaPalyer: HTMLVideoElement;
  now$: Observable<Date>;
  constructor(private page: PagesService) {}

  ngOnInit() {
    this.now$ = interval(1000).pipe(map(() => new Date()));
    this.mediaPalyer = document.getElementById('singleVideo') as HTMLVideoElement;
  }

  saveVideoTime() {
    if (this.mediaPalyer.currentTime !== 0) {
      sessionStorage.setItem('videoTime', String(this.mediaPalyer.currentTime));
    }
  }
}
