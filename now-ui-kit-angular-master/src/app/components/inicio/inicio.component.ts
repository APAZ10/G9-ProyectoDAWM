import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgbAccordionConfig, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  establecimientos: any[] = [
      {
        tipo: "Parques",
        img: "assets/img/soccer-field.png"
      },
      {
        tipo: "Complejos Deportivos",
        img: "assets/img/estadio.png"
      },
      {
        tipo: "Clubes",
        img: "assets/img/club.png"
      }
  ]

  constructor() {

  }

  ngOnInit() {
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.add('navbar-transparent');
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('index-page');
  }
  
  ngOnDestroy(){
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.remove('navbar-transparent');
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('index-page');
  }

}
