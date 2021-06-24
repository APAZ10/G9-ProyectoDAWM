import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgbAccordionConfig, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as introJs from 'intro.js/intro.js';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

    introJS = introJs();

  data : Date = new Date();

  page = 4;
  page1 = 5;
  page2 = 3;
  focus;
  focus1;
  focus2;

  date: {year: number, month: number};
  model: NgbDateStruct;

  public isCollapsed = true;
  public isCollapsed1 = true;
  public isCollapsed2 = true;

  state_icon_primary = true;

  constructor( private renderer : Renderer2, config: NgbAccordionConfig) {
      config.closeOthers = true;
      config.type = 'info';
      this.introJS.setOptions({
        steps: [
          { 
            intro: "Bienvenido a futfinder"
          },
          {
            element: "#nav1",
            intro: "This is a tooltip."
          },
          {
            element: "#nav2",
            intro: "This is a tooltip."
          },
          {
            element: "#nav3",
            intro: "This is a tooltip."
          },
          {
            element: "#nav4",
            intro: "This is a tooltip."
          },
          {
            element: "#popular",
            intro: "This is a tooltip."
          }
        ]
      });
  }
  isWeekend(date: NgbDateStruct) {
      const d = new Date(date.year, date.month - 1, date.day);
      return d.getDay() === 0 || d.getDay() === 6;
  }

  isDisabled(date: NgbDateStruct, current: {month: number}) {
      return date.month !== current.month;
  }

  ngOnInit() {
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.add('navbar-transparent');
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('index-page');
      this.introJS.start();
  }
  
  ngOnDestroy(){
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.remove('navbar-transparent');
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('index-page');
  }

}
