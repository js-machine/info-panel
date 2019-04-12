import {Component, OnInit} from '@angular/core';
import {map} from "rxjs/operators";
import {interval, Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  now$: Observable<Date>;

  ngOnInit() {
    this.now$ = interval(1000).pipe(map(() => new Date()));
  }
}
