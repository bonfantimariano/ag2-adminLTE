import { Component, OnInit } from '@angular/core';
// Variable in assets/js/scripts.js file
declare var AdminLTE: any;

@Component({
  selector: 'app-home-content-info',
  templateUrl: './home-content-info.component.html'
})
export class InfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Update the AdminLTE layouts
    AdminLTE.init();
  }

}
