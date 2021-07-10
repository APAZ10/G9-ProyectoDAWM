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

  establecimientos: any[] = [
      {
        tipo: "Parques",
        descripcion: "Buscar canchas para jugar en parques, áreas abiertas, etc"
      },
      {
        tipo: "Complejos Deportivos",
        descripcion: "Buscar canchas para jugar en complejos deportivos, establecimientos, etc"
      },
      {
        tipo: "Clubes",
        descripcion: "Buscar canchas en clubes privados, usualmente se necesita suscripción"
      }
  ]

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
      /*Agregando las canchas*/
      fetch("../../../assets/data/canchas.json")
      .then(response => response.json())
      .then(data => {
        
        let listaCanchas = data.canchas;
        for(let cancha of listaCanchas as any){
          let zona = cancha.zona;
          let sliderContainer = document.getElementById(zona.toLowerCase());
          
          let slide = document.createElement("ng-template");
          let ngbAttr = document.createAttribute("ngbSlide");
          ngbAttr.value = '';
          slide.setAttributeNode(ngbAttr);
          /*slide.className = 'ngbSlide';*/

          let linkElement = document.createElement("a");
          let linkSrc = document.createAttribute("href");
          linkSrc.value = "https://google.com";
          linkElement.setAttributeNode(linkSrc);

          let imgSlide = document.createElement("img");
          imgSlide.className = "d-block";
          let imgSrc = document.createAttribute("src");
          imgSrc.value = cancha.img;
          imgSlide.setAttributeNode(imgSrc);

          let infoDiv = document.createElement("div");
          infoDiv.className = "carousel-caption d-none d-md-block";

          let nameElement = document.createElement("h5");
          nameElement.innerText = cancha.nombre;
          
          infoDiv.appendChild(nameElement);
          linkElement.appendChild(imgSlide);
          linkElement.appendChild(infoDiv);
          slide.appendChild(linkElement);
          sliderContainer.appendChild(slide);
        }
      })
      .catch(console.error);
  }
  
  ngOnDestroy(){
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.remove('navbar-transparent');
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('index-page');
  }

}
