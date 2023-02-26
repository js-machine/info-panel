import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FaceTracker } from './lib/facetrack';
declare var navigator: any;

@Component({
  selector: 'app-facetrack',
  templateUrl: './facetrack.component.html',
  styleUrls: ['./facetrack.component.scss']
})
export class FacetrackComponent implements OnInit, OnDestroy {
  @ViewChild('hardwareVideo') private hardwareVideo: ElementRef;
  @ViewChild('overlay') private overlay: ElementRef;
  @ViewChild('webgl') private webgl: ElementRef;
  /////////////////////////////////////////////////////////////
  public track: any;
  public scaleX = 1;
  public scaleY = 1;
  public rotationY = 0;
  public rotationZ = 0;
  public rotationX = 0;
  public posx = 0;
  public posy = 0;

  ////////////////////////////////////////////////////////////
  @Input() public width = 1080;
  @Input() public height = 810;

  constructor() {
    navigator.getUserMedia =
      navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
  }

  public ngOnInit() {
    const cameraNumber = 0;
    navigator.mediaDevices.enumerateDevices().then(deviceInfos => {
      const cameras = deviceInfos.filter(el => el.kind === 'videoinput');
      for (let i = 0; i !== cameras.length; ++i) {
        if (i === cameraNumber) {
          const constraints: any = {
            audio: false,
            video: {
              deviceId: { exact: cameras[i].deviceId },
              minAspectRatio: 1.333,
              maxAspectRatio: 1.334,
              minFrameRate: 30
            }
          };
          this.videoStart(constraints);
        }
      }
    });
  }

  public ngOnDestroy() {
    this.track.clmStop();
  }

  public ngAfterViewInit() {
    this.clmtrackr();
  }

  private videoStart(constraints: any) {
    const video = this.hardwareVideo.nativeElement;
    navigator.mediaDevices.getUserMedia(constraints)
    .then((stream: MediaStream) => {
        video.srcObject = stream;
        video.onloadedmetadata = (e: any) => {
          console.log(video);
          video.play();
        }
    })
    .catch(this.logError);
  }

  private clmtrackr() {
    this.track = new FaceTracker(this.hardwareVideo, this.overlay, this.webgl, true);
    this.track.clmInit();
    this.track.drawGridLoop();
  }

  changeMask(value): void {
    this.track.switchDeformedFace(value);
  }

  private logError(error: any) {
    console.log(error.name + ': ' + error.message);
  }
}
