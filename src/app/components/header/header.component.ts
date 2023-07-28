import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: "./header.component.html",
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navBarFixed:boolean = false;

  @HostListener('window:scroll', ['$event']) onScroll() {
    if(window.scrollY > 100) {
        this.navBarFixed = true;
    } else {
      this.navBarFixed = false;
    }
  }
}
