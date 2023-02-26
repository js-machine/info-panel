import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PagesService } from '../../services/pages.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
  providers: [PagesService],
})
export class ForecastComponent implements OnInit {
  @ViewChild('canvasEl', { read: ElementRef }) canvasEl: ElementRef;
  private context: CanvasRenderingContext2D;
  private width = 1080;
  private height = 1500;

  constructor(public page: PagesService) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.context = (
      this.canvasEl.nativeElement as HTMLCanvasElement
    ).getContext('2d');

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
}
