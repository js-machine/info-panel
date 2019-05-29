import { Component } from '@angular/core';
import { VgAPI } from 'videogular2/core';

export interface IMedia {
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
  playlist: Array<IMedia> = [
    {
      title: 'STRIM',
      src: '../../../assets/1.mp4',
      type: 'video/mp4'
    },
    {
      title: 'Mogilev',
      src: '../../../assets/2.mp4',
      type: 'video/mp4'
    }
  ];

  currentIndex = 0;
  currentItem: IMedia = this.playlist[this.currentIndex];
  api: VgAPI;

  constructor() {
  }

  onPlayerReady(api: VgAPI) {
    this.api = api;
    this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.playVideo.bind(this));
    this.api.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
  }

  nextVideo() {
    console.log("test");
    this.currentIndex++;

    if (this.currentIndex === this.playlist.length) {
      this.currentIndex = 0;
    }

    this.currentItem = this.playlist[this.currentIndex];
  }

  playVideo() {
    this.api.play();
  }
}