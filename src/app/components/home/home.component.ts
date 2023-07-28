import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: "./home.component.html",
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  testimonials = [
      {
        text: "“Cleaning and sanitizing are now more important than ever and these wipes make it so easy. They’re great because they don’t dry my skin out and I love knowing that buying their products are better for the environment.”",
        name: "- RACHAEL H."
      },
      {
        text: "“Cleaning and sanitizing are now more important than ever and these wipes make it so easy. They’re great because they don’t dry my skin out and I love knowing that buying their products are better for the environment.”",
        name: "- RACHAEL H."
      },
      {
        text: "“Cleaning and sanitizing are now more important than ever and these wipes make it so easy. They’re great because they don’t dry my skin out and I love knowing that buying their products are better for the environment.”",
        name: "- RACHAEL H."
      },
      {
        text: "“Cleaning and sanitizing are now more important than ever and these wipes make it so easy. They’re great because they don’t dry my skin out and I love knowing that buying their products are better for the environment.”",
        name: "- RACHAEL H."
      },
  ]
}
