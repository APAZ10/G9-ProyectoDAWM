import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    constructor() { }

    ngOnInit() {
      var rellaxHeader = new Rellax('.rellax-header');
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('profile-page');
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.add('navbar-transparent');
      
      //Fetch del selector
      fetch("http://localhost:3001/canchas")
        .then(response => response.json())
        .then(canchas => {
          let comboBox = document.getElementById("inputSelect");

          for (let cancha of canchas) {
            let option = `<option value="${cancha["id"]}">${cancha["nombre"]}</option>`
            comboBox.innerHTML += option;
          }

        })
        .catch(console.error);
      
      //Fetch para la tabla
      let selector = document.getElementById("inputSelect");
      selector.addEventListener('change', (event) => {
        let valor = (<HTMLInputElement>(selector)).value;
        fetch("http://localhost:3002/comentarios/canchas/"+valor)
          .then(response => response.json())
          .then(comentarios => {
            let tabla = document.getElementById("table_body")
            tabla.innerHTML = "";
            for (let comentario of comentarios) {
              let base =
                      `<tr>
                        <td>${comentario["idComentario"]}</td>
                        <td>${comentario["idCancha"]}</td>
                        <td>${comentario["fecha"]}</td>
                        <td>${comentario["mensaje"]}</td>
                      </tr>`
              tabla.innerHTML += base;
            }
    
          })
          .catch(console.error);
    
    
      });

    }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('profile-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

}
