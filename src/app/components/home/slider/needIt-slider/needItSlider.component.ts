import { Component, HostListener, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-slider',
  template: `
    <swiper
      [slidesPerView]="slidesPerView"
      [spaceBetween]="20"
    >
      <ng-template swiperSlide><div class="relative"><img src="./assets/images/Living_Room.png" alt="Banner Image" class="needIt-slider-image"><div class="slide-desription">living room</div></div></ng-template>
      <ng-template swiperSlide><div class="relative"><img src="./assets/images/office.png" alt="Banner Image" class="needIt-slider-image"><div class="slide-desription">office</div></div></ng-template>
      <ng-template swiperSlide><div class="relative"><img src="./assets/images/Kitchen_slide.png" alt="Banner Image" class="needIt-slider-image"><div class="slide-desription">kitchen</div></div></ng-template>
      <ng-template swiperSlide><div class="relative"><img src="./assets/images/bathroom.png" alt="Banner Image" class="needIt-slider-image"><div class="slide-desription">bathroom</div></div></ng-template>
    </swiper>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.None
})
export class SliderComponent {
  slidesPerView = 3; // Default slides per view for desktop

  constructor() {
    const storedSlidesPerView = localStorage.getItem('slidesPerView');
    if (storedSlidesPerView) {
      this.slidesPerView = parseInt(storedSlidesPerView, 10);
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.updateSlidesPerView(window.innerWidth);
  }

  updateSlidesPerView(windowWidth: number) {
    if (windowWidth >= 1024) {
      this.slidesPerView = 3; // Desktop
    } else if (windowWidth >= 768) {
      this.slidesPerView = 2; // Tablet
    } else {
      this.slidesPerView = 1; // Mobile
    }
    localStorage.setItem('slidesPerView', this.slidesPerView.toString());
  }
}
