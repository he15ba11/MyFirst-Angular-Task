import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent {
  text = 'this is two way binding';
  Reset() {
    this.text = '';
  }
  i: number = 1;
  cl: any;
  next() {
    if (this.i === 6) this.i = 0;
    ++this.i;
  }
  previous() {
    if (this.i === 1) this.i = 7;
    --this.i;
  }
  slideShow() {
    this.cl = setInterval(() => this.next(), 1000);
  }
  stop() {
    clearInterval(this.cl);
  }
  getSrcImg() {
    return `url('../assets/${this.i}.jpg')`;
  }
}
