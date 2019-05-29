import {Component, OnInit} from '@angular/core';
import {map} from "rxjs/operators";
import {interval, Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {}

  now$: Observable<Date>;

  ngOnInit() {
    this.now$ = interval(1000).pipe(map(() => new Date()));
  }

  autoPolay(video) {
    video.play();
  }

  goToAppList(): void {
    this.router.navigate(['/apps']);
  }
}
