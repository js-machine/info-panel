import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FaceTracker } from './lib/facetrack';
declare var navigator: any;

@Component({
  selector: 'app-facetrack',
  templateUrl: './facetrack.component.html',
  styleUrls: ['./facetrack.component.scss']
})
export class FacetrackComponent implements OnInit {
  @ViewChild('hardwareVideo') private hardwareVideo: ElementRef;
  @ViewChild('overlay') private overlay: ElementRef;
  @ViewChild('webgl') private webgl: ElementRef;
  /////////////////////////////////////////////////////////////
  private constraints: any;
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
    this.constraints = {
      audio: false,
      video: {
        width: { ideal: 640 },
        height: { ideal: 480 },
        minAspectRatio: 1.333,
        maxAspectRatio: 1.334,
        minFrameRate: 30
      }
    };
    this.videoStart();
  }
  /* tslint:disable */
  public ngAfterViewInit() {
    this.clmtrackr();
  }
  /* tslint:enasable */

  private videoStart() {
    const video = this.hardwareVideo.nativeElement;

    const promise = new Promise<MediaStream>((resolve, reject) => {
      navigator.getUserMedia(
        this.constraints,
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
    // Debug
    this.track.drawGridLoop();
    // this.track.drawGrid(); // */Comment for No-Debug
    // Draw Face Mask
    // this.track.drawMask();//Comment for No-Mask
    // Draw 3D Objects
    // this.track.getFaceData(); // Comment for No-3D-Objects
  }

  // private loop = () => {
  //   this.scaleX = this.track._scaleX;
  //   this.scaleY = this.track._scaleY;
  //   this.rotationY = this.track._rotationY;
  //   this.rotationZ = this.track._rotationZ;
  //   this.rotationX = this.track._rotationX;
  //   this.posx = this.track._posx;
  //   this.posy = this.track._posy;

  //   requestAnimationFrame(this.loop);
  // };

  changeMask(value): void {
    this.track.switchDeformedFace(value);
  }

  private logError(error: any) {
    console.log(error.name + ': ' + error.message);
  }
}
