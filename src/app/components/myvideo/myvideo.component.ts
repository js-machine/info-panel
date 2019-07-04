import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import playlistJSON from 'assets/video/playlist.json';
import { Observable } from 'rxjs';
import { VgAPI } from 'videogular2/core';

export interface Media {
  title: string;
  src: string;
  type: string;
}

@Component({
  selector: 'video-player',
  templateUrl: './myvideo.component.html',
  styleUrls: ['./myvideo.component.scss']
})
export class MyVideoComponent {
  private _jsonURL = 'assets/video/playlist.json';
  private playlist: Media[] = playlistJSON;
  private currentIndex = 0;
  private videoTime = 0;
  private currentItem: Media = this.playlist[this.currentIndex];
  private api: VgAPI;
  private mediaPalyer: HTMLVideoElement;

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.currentIndex = sessionStorage.getItem('videoIndex') ? parseInt(sessionStorage.getItem('videoIndex'), 10) : 0;
      this.videoTime = sessionStorage.getItem('videoTime') ? parseFloat(sessionStorage.getItem('videoTime')) : 0;
      this.playlist = data;
      this.currentItem = this.playlist[this.currentIndex];
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  onPlayerReady(api: VgAPI) {
    this.api = api;
    this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.playVideo.bind(this));
    this.api.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
    this.mediaPalyer = document.getElementById('singleVideo') as HTMLVideoElement;
  }

  /* tslint:disable */
  public ngOnDestroy() {
    this.saveVideoTime();
  }
  /* tslint:enable */

  private saveVideoTime() {
    if (this.mediaPalyer.currentTime !== 0) {
      sessionStorage.setItem('videoTime', String(this.mediaPalyer.currentTime));
    }
  }

  nextVideo() {
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
  }
}
