import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  goToAppList(): void {
    this.router.navigate(['/apps']);
  }

  goToForecast(): void {
    this.router.navigate(['/forecast']);
  }
}
