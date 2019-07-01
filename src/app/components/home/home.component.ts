import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private mediaPalyer: HTMLVideoElement;

  constructor(private router: Router) {}

  now$: Observable<Date>;

  ngOnInit() {
    this.now$ = interval(1000).pipe(map(() => new Date()));
    this.mediaPalyer = document.getElementById('singleVideo') as HTMLVideoElement;
  }

  saveVideoTime() {
    if (this.mediaPalyer.currentTime !== 0) {
      sessionStorage.setItem('videoTime', String(this.mediaPalyer.currentTime));
    }
  }

  goToAppList(): void {
    this.saveVideoTime();
    this.router.navigate(['/apps']);
  }

  goToForecast(): void {
    this.saveVideoTime();
    this.router.navigate(['/forecast']);
  }
}
