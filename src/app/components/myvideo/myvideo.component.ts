import { Component } from '@angular/core';
import playlistJSON from 'assets/video/playlist.json';
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
  playlist: Media[] = playlistJSON;
  currentIndex = 0;
  currentItem: Media = this.playlist[this.currentIndex];
  api: VgAPI;

  constructor() {
    this.playlist = playlistJSON;
    this.currentIndex = localStorage.getItem('videoIndex') ? +localStorage.getItem('videoIndex') : 0;
    this.currentItem = this.playlist[this.currentIndex];
  }

  onPlayerReady(api: VgAPI) {
    this.api = api;
    this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.playVideo.bind(this));
    this.api.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
  }

  nextVideo() {
    this.currentIndex++;

    if (this.currentIndex === this.playlist.length) {
      this.currentIndex = 0;
    }

    localStorage.setItem('videoIndex', String(this.currentIndex));

    this.currentItem = this.playlist[this.currentIndex];
  }

  playVideo() {
    this.api.play();
  }
}
