import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  @ViewChild('canvasEl') canvasEl: ElementRef;

  private context: CanvasRenderingContext2D;
  private width = 1080;
  private height = 1500;

  constructor(private router: Router) {}

  ngOnInit() {
    this.context = (this.canvasEl.nativeElement as HTMLCanvasElement).getContext('2d');

    this.canvasEl.nativeElement.width = this.width;
    this.canvasEl.nativeElement.height = this.height;

    this.draw();
  }

  draw() {
    // Create a linear gradient
    const gradient = this.context.createLinearGradient(0, 0, 0, this.height);

    gradient.addColorStop(0, '#6195e8');
    gradient.addColorStop(1, '#8aade3');

    this.context.fillStyle = gradient;
    this.context.fillRect(0, 0, this.width, this.height);
  }

  goToAppList(): void {
    this.router.navigate(['/apps']);
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}
