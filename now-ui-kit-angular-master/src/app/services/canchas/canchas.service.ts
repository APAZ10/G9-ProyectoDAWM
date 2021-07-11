import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cancha } from 'app/interfaces/cancha';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanchasService {

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<any> {
    return this.http.get<any>("assets/data/canchas.json");
  }

  delete(id: string): boolean {
    let canchas: Cancha[];
    const subscripcion = this.list();
    subscripcion.subscribe(data => {
      canchas = data.canchas;
    });
    for(let index = 0; index < canchas.length; index++) {
      if (canchas[index].id === id) {
        canchas.splice(index, 1);
        return true;
      }
    }
    return false;
  }

}
