import { AfterViewInit, Component, HostListener, ElementRef, ViewChild, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import Swiper from 'swiper';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-instagram-slider',
  template: `
    <swiper
      #mySwiper
      [slidesPerView]="slidesPerView"
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
  styles: [],
})
export class InstagramSliderComponent implements AfterViewInit, AfterViewChecked {
  @ViewChild(SwiperComponent) swiperComponent!: SwiperComponent;
  private swiper: any;
  slidesPerView = 5; // Default slides per view for desktop

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.swiper = this.swiperComponent.swiperRef;
    this.handleSwiperEvents();
  }

  ngAfterViewChecked(): void {
    this.updateSlidesPerView(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.updateSlidesPerView(window.innerWidth);
  }

  updateSlidesPerView(windowWidth: number) {
    let newSlidesPerView = 5; // Default for desktop
    if (windowWidth >= 1024) {
      newSlidesPerView = 5; // Desktop
      this.swiper.allowTouchMove = false; // Disable touch movement on desktop
    } else if (windowWidth >= 768) {
      newSlidesPerView = 3; // Tablet
      this.swiper.allowTouchMove = true; // Enable touch movement on tablet
    } else {
      newSlidesPerView = 2; // Mobile
      this.swiper.allowTouchMove = true; // Enable touch movement on mobile
    }

    if (this.slidesPerView !== newSlidesPerView) {
      this.slidesPerView = newSlidesPerView;
      this.swiper.params.slidesPerView = this.slidesPerView;
      this.swiper.update();

      // Manually trigger change detection
      this.cdr.detectChanges();
    }
  }

  private handleSwiperEvents() {
    // Listen for pointer events to control swiper behavior on tablet and mobile
    if (!this.isTouchDevice()) {
      window.addEventListener('wheel', this.handleWheel.bind(this), { passive: false });
    }
  }

  private handleWheel(event: WheelEvent) {
    const isShiftKeyPressed = event.shiftKey;
    const isNavigationEvent =
      (event.deltaY > 0 && !this.swiper.isEnd) || (event.deltaY < 0 && !this.swiper.isBeginning);

    if (isShiftKeyPressed && isNavigationEvent) {
      event.preventDefault();

      if (event.deltaY > 0) {
        this.swiper.slideNext();
      } else {
        this.swiper.slidePrev();
      }
    } else {
      // Allow default wheel event behavior for regular scrolling on desktop
      this.swiper.allowTouchMove = true;
    }
  }

  private isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }
}