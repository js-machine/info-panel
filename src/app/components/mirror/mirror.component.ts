import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import clm from 'clmtrackr';

@Component({
  selector: 'mirror',
  templateUrl: './mirror.component.html',
  styleUrls: ['./mirror.component.scss']
})
export class MirrorComponent implements OnInit {
  video: HTMLVideoElement;
  overlay: HTMLCanvasElement;
  overlayCC: CanvasRenderingContext2D;
  ctrack;

  constructor(private router: Router) {}

  goToAppList(): void {
    this.router.navigate(['/apps']);
  }

  ngOnInit(): void {
    console.log(clm);
    this.video = document.getElementById('videoel') as HTMLVideoElement;
    this.overlay = document.getElementById('overlay') as HTMLCanvasElement;
    this.overlayCC = this.overlay.getContext('2d');
    this.ctrack = new clm.tracker();
    this.ctrack.init();

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(stream => {
        this.video.srcObject = stream;
        this.ctrack.start(this.video);
        this.trackingLoop();
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  trackingLoop() {
    requestAnimationFrame(this.trackingLoop.bind(this));

    const currentPosition = this.ctrack.getCurrentPosition();
    this.overlayCC.clearRect(0, 0, 400, 300);

    if (currentPosition) {
      this.ctrack.draw(this.overlay);
    }
  }
}
