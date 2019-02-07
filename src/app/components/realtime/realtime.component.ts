import * as moment from "moment";
import { Component, OnInit } from '@angular/core';
import {interval} from "rxjs";
import {distinctUntilChanged, map} from "rxjs/operators";

@Component({
  selector: 'info-realtime',
  templateUrl: './realtime.component.html',
  styleUrls: ['./realtime.component.scss']
})
export class RealtimeComponent implements OnInit {

  currentTime: string;
  currentDate: string;

  ngOnInit() {
    interval(1000).pipe(
      map(() => {
        return moment(new Date()).format("HH:mm:ss")
      }),
      distinctUntilChanged()
    ).subscribe((displayValue) => {
      const now = new Date();
      this.currentDate = `${this.getMonth(now)} ${now.getDay()}`;
      this.currentTime = displayValue;
    })
  }
  
  private getMonth(now: Date): string {
    const names = [
      "студзень",
      "люты",
      "сакавік",
      "красавік",
      "май",
      "чэрвень",
      "ліпень",
      "жнівень",
      "верасень",
      "кастрычнік",
      "лістапад",
      "снежань"
    ];

    const monthName = names[now.getMonth()];
    return monthName;
  }
}
