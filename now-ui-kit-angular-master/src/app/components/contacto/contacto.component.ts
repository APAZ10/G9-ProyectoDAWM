import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  data : Date = new Date();
  focus;
  focus1;

  constructor() { }

  ngOnInit() {
    // var rellaxHeader = new Rellax('.rellax-header');
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');

    //Prueba
    
    const previousBtn=document.getElementById("previous");
    const nextBtn=document.getElementById("next");
    const finishBtn=document.getElementById("finish");
    const content=document.getElementById("content");
    const bullets=document.querySelectorAll(".bullet");
    
    const max_steps=4;
    let currentsteps=1;
    
    nextBtn.addEventListener('click',()=>{
      const currentBullet=bullets[currentsteps-1];
      currentBullet.classList.add('completed');
      currentsteps++;
      (previousBtn as any).disabled=false;
      if(currentsteps==max_steps){
        (nextBtn as any).disabled=true;
        (finishBtn as any).disabled=false;
      }
      content.innerText=`Step Number ${currentsteps}`
    
    });

  }
  
  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

}

//intento
/*
const previousBtn=document.getElementById("previous");
const nextBtn=document.getElementById("next");
const finishBtn=document.getElementById("finish");
const content=document.getElementById("content");
const bullets=document.querySelectorAll(".bullet");

const max_steps=4;
let currentsteps=1;

nextBtn.addEventListener('click',()=>{
  const currentBullet=bullets[currentsteps-1];
  currentBullet.classList.add('completed');
  currentsteps++;
  (previousBtn as any).disabled=false;
  if(currentsteps==max_steps){
    (nextBtn as any).disabled=true;
    (finishBtn as any).disabled=false;
  }
  content.innerText=`Step Number ${currentsteps}`

});
*/
