import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import * as playlistJSON from '../../../video/playlist.json';
import { Observable } from 'rxjs';
import { VgApiService } from '@videogular/ngx-videogular/core';

export interface Media {
  title: string;
  src: string;
  type: string;
  fullscreen: boolean;
}

@Component({
  selector: 'video-player',
  templateUrl: './myvideo.component.html',
  styleUrls: ['./myvideo.component.scss'],
})
export class MyVideoComponent implements OnDestroy {
  private _jsonURL = 'video/playlist.json';
  private playlist: Media[] = playlistJSON;
  private currentIndex = 0;
  private videoTime = 0;
  public currentItem: Media = this.playlist[this.currentIndex];
  private api: VgApiService;
  private mediaPalyer: HTMLVideoElement;

  constructor(private http: HttpClient) {
    this.getJSON().subscribe((data) => {
      this.currentIndex = sessionStorage.getItem('videoIndex')
        ? parseInt(sessionStorage.getItem('videoIndex'), 10)
        : 0;
      this.videoTime = sessionStorage.getItem('videoTime')
        ? parseFloat(sessionStorage.getItem('videoTime'))
        : 0;
      this.playlist = data;
      this.currentItem = this.playlist[this.currentIndex];
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  onPlayerReady(api: VgApiService) {
    this.api = api;
    this.api.fsAPI.nativeFullscreen = false;
    this.api
      .getDefaultMedia()
      .subscriptions.loadedMetadata.subscribe(this.playVideo.bind(this));
    this.api
      .getDefaultMedia()
      .subscriptions.ended.subscribe(this.nextVideo.bind(this));
    this.mediaPalyer = document.getElementById(
      'singleVideo'
    ) as HTMLVideoElement;
  }

  public ngOnDestroy() {
    this.saveVideoTime();
  }

  private saveVideoTime() {
    if (this.mediaPalyer.currentTime !== 0) {
      sessionStorage.setItem('videoTime', String(this.mediaPalyer.currentTime));
    }
  }

  // private setFullScreen() {
  //   if (this.currentItem.fullscreen && this.api.fsAPI.isFullscreen){
  //     this.api.fsAPI.toggleFullscreen();
  //   }
  //   else if (this.api.fsAPI.isAvailable && !this.api.fsAPI.isFullscreen && this.currentItem.fullscreen) {
  //     this.api.fsAPI.toggleFullscreen();
  //   }
  // }

  nextVideo() {
    if (this.currentItem.fullscreen && this.api.fsAPI.isFullscreen){
      this.api.fsAPI.toggleFullscreen();
    }

    this.currentIndex++;

    if (this.currentIndex === this.playlist.length) {
      this.currentIndex = 0;
    }

    sessionStorage.setItem('videoIndex', String(this.currentIndex));
    this.currentItem = this.playlist[this.currentIndex];
  }

  playVideo() {
    if (this.videoTime) {
      this.api.seekTime(this.videoTime);
      this.videoTime = 0;
    }
    this.api.play();

    if (this.api.fsAPI.isAvailable && !this.api.fsAPI.isFullscreen && this.currentItem.fullscreen) {
      this.api.fsAPI.toggleFullscreen();
    }
  }
}
