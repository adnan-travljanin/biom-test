import { Component, Input, OnInit, OnDestroy } from '@angular/core';

interface Testimonial {
  text: string;
  name: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
})
export class CarouselComponent implements OnInit, OnDestroy {

  @Input() testimonials: Testimonial[] = [];
  @Input() indicators = true;

  selectedIndex = 0;
  private intervalId: any;

  ngOnInit(): void {
    this.startCarousel();
  }

  ngOnDestroy(): void {
    this.stopCarousel();
  }

  startCarousel(): void {
    this.intervalId = setInterval(() => {
      this.nextTestimonial();
    }, 3000);
  }

  stopCarousel(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  selectTestimonial(index: number): void {
    if (index !== this.selectedIndex) {
      this.selectedIndex = index;
    }
  }

  nextTestimonial(): void {
    this.selectedIndex = (this.selectedIndex + 1) % this.testimonials.length;
  }
}