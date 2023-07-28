import { AfterViewInit, Component,HostListener,ElementRef, ViewChild} from '@angular/core';
import Swiper from 'swiper';
import { SwiperComponent } from 'swiper/angular';



@Component({
  selector: 'app-instagram-slider',
  template: `
    <swiper
      #mySwiper
      [slidesPerView]="5"
      [spaceBetween]="20"
    >
      <ng-template swiperSlide> <img src="./assets/images/small_stock_wipe.png" alt=""></ng-template>
      <ng-template swiperSlide> <img src="./assets/images/Biom_slider_black.png" alt=""></ng-template>
      <ng-template swiperSlide> <img src="./assets/images/Biom_slider_one.png" alt=""></ng-template>
      <ng-template swiperSlide> <img src="./assets/images/chair_slider.png" alt=""></ng-template>
      <ng-template swiperSlide> <img src="./assets/images/Biom_slider.png" alt=""></ng-template>
      <ng-template swiperSlide> <img src="./assets/images/hand_wipe.png" alt=""></ng-template>
</swiper>
  `,
  styles: [
  ],
})
export class InstagramSliderComponent implements AfterViewInit{

  @ViewChild(SwiperComponent) swiperComponent!: SwiperComponent;
  private swiper: any;

  ngAfterViewInit(): void {
    this.swiper = this.swiperComponent.swiperRef;

    this.handleSwiperEvents();
  }

  private handleSwiperEvents() {
    window.addEventListener('keydown', this.handleKeyDown.bind(this));
    window.addEventListener('wheel', this.handleWheel.bind(this), { passive: false });
  }

  private handleKeyDown(event: KeyboardEvent) {
    if (event.shiftKey) {
    }
  }

  private handleWheel(event: WheelEvent) {
   
    const isShiftKeyPressed = event.shiftKey;

    const isNavigationEvent = (event.deltaY > 0 && !this.swiper.isEnd) || (event.deltaY < 0 && !this.swiper.isBeginning);

    if (isShiftKeyPressed && isNavigationEvent) {
      event.preventDefault();

      if (event.deltaY > 0) {
        this.swiper.slideNext();
      } else {
        this.swiper.slidePrev();
      }
    }
  }
}
