import { ElementRef } from '@angular/core';
import { FaceDeformer } from './facedeformation';
import { FaceModel } from './model_spca_20_svm';

declare var clm: any;

export class FaceTracker {
  // Internal Constructor Params
  private _video: ElementRef;
  private _overlay: ElementRef;
  private _videoCanvas: HTMLCanvasElement;
  private _webgl: ElementRef;
  private _videoReady = false;

  private _vid_width: number;
  private _vid_height: number;

  // CLM object
  private _clm: any;

  // Face Deformation
  private _defor: any;
  private _faceModel: any;
  private _points: any;
  private _animationRequest: any;
  private _positions: any;
  private _presets: any;
  private _pnums: any;
  private _ph: any;
  private _gui: any;

  // Canvas & Context
  private _canvas: any;
  private _cc: any;
  private _webglCanvas: any;
  private _webglCC: any;

  // Params from Face
  public _scaleX = 1;
  public _scaleY = 1;
  public _rotationY = 0;
  public _rotationZ = 0;
  public _rotationX = 0;
  public _posx = 0;
  public _posy = 0;

  private _mouth_vertices = [
    [44, 45, 61, 44],
    [45, 46, 61, 45],
    [46, 60, 61, 46],
    [46, 47, 60, 46],
    [47, 48, 60, 47],
    [48, 59, 60, 48],
    [48, 49, 59, 48],
    [49, 50, 59, 49],
    [50, 51, 58, 50],
    [51, 52, 58, 51],
    [52, 57, 58, 52],
    [52, 53, 57, 52],
    [53, 54, 57, 53],
    [54, 56, 57, 54],
    [54, 55, 56, 54],
    [55, 44, 56, 55],
    [44, 61, 56, 44],
    [61, 60, 56, 61],
    [56, 57, 60, 56],
    [57, 59, 60, 57],
    [57, 58, 59, 57],
    [50, 58, 59, 50]
  ];

  private _extendVertices = [
    [0, 71, 72, 0],
    [0, 72, 1, 0],
    [1, 72, 73, 1],
    [1, 73, 2, 1],
    [2, 73, 74, 2],
    [2, 74, 3, 2],
    [3, 74, 75, 3],
    [3, 75, 4, 3],
    [4, 75, 76, 4],
    [4, 76, 5, 4],
    [5, 76, 77, 5],
    [5, 77, 6, 5],
    [6, 77, 78, 6],
    [6, 78, 7, 6],
    [7, 78, 79, 7],
    [7, 79, 8, 7],
    [8, 79, 80, 8],
    [8, 80, 9, 8],
    [9, 80, 81, 9],
    [9, 81, 10, 9],
    [10, 81, 82, 10],
    [10, 82, 11, 10],
    [11, 82, 83, 11],
    [11, 83, 12, 11],
    [12, 83, 84, 12],
    [12, 84, 13, 12],
    [13, 84, 85, 13],
    [13, 85, 14, 13],
    [14, 85, 86, 14],
    [14, 86, 15, 14],
    [15, 86, 87, 15],
    [15, 87, 16, 15],
    [16, 87, 88, 16],
    [16, 88, 17, 16],
    [17, 88, 89, 17],
    [17, 89, 18, 17],
    [18, 89, 93, 18],
    [18, 93, 22, 18],
    [22, 93, 21, 22],
    [93, 92, 21, 93],
    [21, 92, 20, 21],
    [92, 91, 20, 92],
    [20, 91, 19, 20],
    [91, 90, 19, 91],
    [19, 90, 71, 19],
    [19, 71, 0, 19]
  ];

  constructor(video: ElementRef, overlay: ElementRef, webgl: ElementRef, videoReady: boolean) {
    this._video = video;
    this._overlay = overlay;
    this._webgl = webgl;
    this._videoReady = videoReady;
    this._vid_height = this._video.nativeElement.height;
    this._vid_width = this._video.nativeElement.width;
    this._videoCanvas = document.createElement('CANVAS') as HTMLCanvasElement;
    this._videoCanvas.width = this._vid_width;
    this._videoCanvas.height = this._vid_height;
    //////////////////////////////
    this._clm = new clm.tracker({ useWebGL: true, searchWindow: 14 });
    this._defor = new FaceDeformer();
    this._faceModel = new FaceModel();

    this._presets = {
      unwell: [0, 0, 0, 0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      inca: [0, 0, -9, 0, -11, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0],
      cheery: [0, 0, -9, 9, -11, 0, 0, 0, 0, 0, 0, 0, -9, 0, 0, 0, 0, 0],
      dopey: [0, 0, 0, 0, 0, 0, 0, -11, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0],
      longface: [0, 0, 0, 0, -15, 0, 0, -12, 0, 0, 0, 0, 0, 0, -7, 0, 0, 5],
      lucky: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -4, 0, -6, 12, 0, 0],
      overcute: [0, 0, 0, 0, 16, 0, -14, 0, 0, 0, 0, 0, -7, 0, 0, 0, 0, 0],
      aloof: [0, 0, 0, 0, 0, 0, 0, -8, 0, 0, 0, 0, 0, 0, -2, 0, 0, 10],
      evil: [0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, -8],
      artificial: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, -16, 0, 0, 0, 0, 0],
      none: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };
  }

  public clmInit() {
    // Tracking Init
    this._clm.init(this._faceModel.model());
    // Start FaceTracking
    this.clmStart();
    ////////////////////////////
    // Init canvas
    this._canvas = this._overlay.nativeElement;
    this._cc = this._canvas.getContext('2d');
    // Init 3D Canvas
    this._webglCanvas = this._webgl.nativeElement; // */
    ////////////////////////////
    // Init Face facedeformation
    this._defor.init(this._webglCanvas);

    this._pnums = this._faceModel.model().shapeModel.eigenValues.length - 2;
    this._ph = new this.parameterHolder();

    for (let i = 0; i < this._pnums; i++) {
      this._ph['component ' + (i + 3)] = this._presets['unwell'][i];
    }
  }

  public clmStart() {
    this._clm.start(this._video.nativeElement);
  }

  public clmStop() {
    this._clm.stop();
  }

  public drawGridLoop = () => {
    // get position of face
    const positions = this._clm.getCurrentPosition();
    this._cc.clearRect(0, 0, this._vid_width, this._vid_height);
    if (positions) {
      // draw current grid
      this._clm.draw(this._canvas);
    }
    // check whether mask has converged
    const pn = this._clm.getConvergence();
    if (pn < 0.4) {
      this.drawMaskLoop();
    } else {
      requestAnimationFrame(this.drawGridLoop);
    }
  };

  private drawMaskLoop = () => {
    this._videoCanvas.getContext('2d').drawImage(this._video.nativeElement, 0, 0, this._vid_width, this._vid_height);
    const pos = this._clm.getCurrentPosition();

    if (pos) {
      // create additional points around face
      let tempPos;
      /* tslint:disable */
      let addPos = [];
      for (let i = 0; i < 23; i++) {
        tempPos = [];
        tempPos[0] = (pos[i][0] - pos[62][0]) * 1.3 + pos[62][0];
        tempPos[1] = (pos[i][1] - pos[62][1]) * 1.3 + pos[62][1];
        addPos.push(tempPos);
      }
      /* tslint:enaable */
      // merge with pos
      let newPos = pos.concat(addPos);

      let newVertices = this._faceModel.model().path.vertices.concat(this._mouth_vertices);
      // merge with newVertices
      newVertices = newVertices.concat(this._extendVertices);
      this._defor.load(this._videoCanvas, newPos, this._faceModel.model, newVertices);
      /* tslint:disable */
      let parameters = this._clm.getCurrentParameters();
      for (let i = 6; i < parameters.length; i++) {
        parameters[i] += this._ph['component ' + (i - 3)];
      }
      /* tslint:enable */
      this._positions = this._clm.calculatePositions(parameters);
      this._cc.clearRect(0, 0, this._vid_width, this._vid_height);
      if (this._positions) {
        // add positions from extended boundary, unmodified
        newPos = this._positions.concat(addPos);
        // draw mask on top of face
        this._defor.draw(newPos);
      }
    }
    this._animationRequest = requestAnimationFrame(this.drawMaskLoop);
  };

  private parameterHolder = () => {
    for (let i = 0; i < this._pnums; i++) {
      this['component ' + (i + 3)] = 0;
    }
  };

  public switchDeformedFace = value => {
    for (let i = 0; i < this._pnums; i++) {
      this._ph['component ' + (i + 3)] = this._presets[value][i];
    }
  };

  // --END FACETRACK.TS
}
