import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: "./header.component.html",
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  navBarFixed: boolean = false;
  showMenu: boolean = false;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    // Initially set the showMenu flag to false (menu closed) when the component is initialized
  this.showMenu = false;
  }

  ngOnDestroy() {
    // Remove the resize event listener to avoid memory leaks
    window.removeEventListener('resize', this.onResize.bind(this));
  }

  @HostListener('window:scroll', ['$event']) onScroll() {
    if(window.scrollY > 100) {
        this.navBarFixed = true;
    } else {
      this.navBarFixed = false;
    }
  }
  
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.showMenu = false;
    }
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  // Method to check if the screen size is appropriate for the tablet and mobile view
  isTabletOrMobile(): boolean {
    // Adjust this value based on your desired breakpoint for tablet view
    const tabletBreakpoint = 768;
    return window.innerWidth < tabletBreakpoint;
  }

  // Method to handle window resize and update the showMenu flag
  onResize() {
    this.showMenu = this.isTabletOrMobile();
  }
}
