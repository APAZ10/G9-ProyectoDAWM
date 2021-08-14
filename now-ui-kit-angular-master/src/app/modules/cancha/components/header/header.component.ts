import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    fetch("../../../assets/data/canchas.json")
      .then(response => response.json())
      .then(data => {
        
        let listaCanchas = data.canchas;
        for(let cancha of listaCanchas as any){
          if(("/canchas/"+cancha.id)===window.location.pathname){
            document.getElementById("nombre").textContent=cancha.nombre
            document.getElementById("direccion").textContent=cancha.direccion
            document.getElementById("precio").textContent=cancha.precio
            document.getElementById("descripcion").textContent=cancha.descripcion
            document.getElementById("coordenadas").textContent=cancha.coordenadas[0]+","+cancha.coordenadas[1]
          }
        }
      })
      .catch(console.error);
  }

}
