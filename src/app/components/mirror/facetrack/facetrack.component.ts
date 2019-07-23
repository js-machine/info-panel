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
              ыminFrameRate: 30
            }
          };
          this.videoStart(constraints);
        }
      }
    });
  }

  /* tslint:disable */
  public ngOnDestroy() {
    this.track.clmStop();
  }

  public ngAfterViewInit() {
    this.clmtrackr();
  }
  /* tslint:enable */

  private videoStart(constraints: any) {
    const video = this.hardwareVideo.nativeElement;
    const promise = new Promise<MediaStream>((resolve, reject) => {
      navigator.getUserMedia(
        constraints,
        (stream: MediaStream | PromiseLike<MediaStream>) => {
          resolve(stream);
        },
        (err: any) => reject(err)
      );
    })
      .then(stream => {
        if ('srcObject' in video) {
          video.srcObject = stream;
        } else {
          video.src = window.URL.createObjectURL(stream);
        }
        video.onloadedmetadata = (e: any) => {
          video.play();
        };
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
