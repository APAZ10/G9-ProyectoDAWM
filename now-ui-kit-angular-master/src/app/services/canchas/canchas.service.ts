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

  list(): Observable<Cancha[]> {
    return this.http.get<Cancha[]>("http://localhost:3000/cancha");
  }

  get(id: string): Observable<Cancha> {
    return this.http.get<Cancha>(`http://localhost:3000/cancha/${id}`);
  }

  delete(id: string): Observable<Cancha> {
    return this.http.delete<Cancha>(`http://localhost:3000/cancha/delete/${id}`);
  }

  add(cancha: Cancha): Observable<Cancha> {
    return this.http.post<Cancha>("http://localhost:3000/cancha/add", cancha);
  }

  update(cancha: Cancha) {
    return this.http.patch(`http://localhost:3000/cancha/update/${cancha.id}`, cancha);
  }

}
