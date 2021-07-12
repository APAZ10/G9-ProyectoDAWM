import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cancha } from 'app/interfaces/cancha';
import { CanchasService } from 'app/services/canchas/canchas.service';

@Component({
  selector: 'app-edit-cancha',
  templateUrl: './edit-cancha.component.html',
  styleUrls: ['./edit-cancha.component.css']
})
export class EditCanchaComponent implements OnInit {
  form: FormGroup;
  cancha: Cancha;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private canchaService: CanchasService,
    private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      nombre: new FormControl(),
      zona: new FormControl(),
      direccion: new FormControl(),
      descripcion: new FormControl(),
      img: new FormControl(),
      likes: new FormControl(),
      precio: new FormControl(),
      coordenadaX: new FormControl(),
      coordenadaY: new FormControl()
    });
   }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null && id != undefined) {
      this.canchaService.get(id).subscribe(data => {
        this.cancha = data;
        this.setInitialValues();
      });
    }
  }

  setCancha(): void {
    this.cancha = this.formToCancha();
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null && id != undefined) {
      this.cancha.id = id;
      this.canchaService.update(this.cancha).subscribe(data => {
        this.router.navigate(['admin', 'control-panel']);
      });
    } else {
      this.canchaService.add(this.cancha).subscribe(data => {
        this.router.navigate(['admin', 'control-panel']);
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['admin', 'control-panel']);
  }

  private formToCancha(): Cancha {
    return {
      id: "",
      nombre: this.form.value.nombre,
      zona: this.form.value.zona,
      direccion: this.form.value.direccion,
      descripcion: this.form.value.descripcion,
      img: this.form.value.img,
      likes: this.form.value.likes,
      precio: this.form.value.precio,
      coordenadas: [
        this.form.value.coordenadaX,
        this.form.value.coordenadaY
      ]
    };
  }

  private setInitialValues(): void {
    this.form.get('nombre').setValue(this.cancha.nombre);
    this.form.get('zona').setValue(this.cancha.zona);
    this.form.get('direccion').setValue(this.cancha.direccion);
    this.form.get('descripcion').setValue(this.cancha.descripcion);
    this.form.get('img').setValue(this.cancha.img);
    this.form.get('likes').setValue(this.cancha.likes);
    this.form.get('precio').setValue(this.cancha.precio);
    this.form.get('coordenadaX').setValue(this.cancha.coordenadas[0]);
    this.form.get('coordenadaY').setValue(this.cancha.coordenadas[1]);
  }

}
