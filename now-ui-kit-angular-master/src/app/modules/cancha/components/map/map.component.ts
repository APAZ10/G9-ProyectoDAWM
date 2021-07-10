import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

const iconRetinaUrl = 'assets/img/marker-icon-2x.png';
const iconUrl = 'assets/img/marker-icon.png';
const shadowUrl = 'assets/img/marker-shadow.png';
//const shadowUrl = '../../../../../assets/img/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit, AfterViewInit {

  private map;

  private initMap(): void {
    fetch("../../../assets/data/canchas.json")
    .then(response => response.json())
    .then(data => {
      let listaCanchas = data.canchas;
      for(let cancha of listaCanchas as any){
        if(cancha.nombre==="Cancha de fútbol: La Fortaleza"){
          const lon = cancha.coordenadas[0];
          const lat = cancha.coordenadas[1];
          this.map = L.map('map', {
            center: [ lon, lat ],
            zoom: 18
          });
          const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            minZoom: 14,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          });
          tiles.addTo(this.map);
          const marker = L.marker([lat, lon]);
          const iconRetinaUrl = 'assets/img/marker-icon-2x.png';
          const iconUrl = 'assets/img/marker-icon.png';
          const shadowUrl = 'assets/img/marker-shadow.png';
          const iconDefault = L.icon({
            iconRetinaUrl,
            iconUrl,
            shadowUrl,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            tooltipAnchor: [16, -28],
            shadowSize: [41, 41]
          });
          marker.options.icon = iconDefault;
          console.log(marker);
          marker.addTo(this.map);
        }
      }
    })
    .catch(console.error);
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
