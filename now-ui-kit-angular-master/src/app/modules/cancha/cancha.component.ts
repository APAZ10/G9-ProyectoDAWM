import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-cancha',
    templateUrl: './cancha.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `], //Eliminar
    styleUrls: ['./cancha.component.css']
})

export class CanchaComponent implements OnInit, OnDestroy {

    constructor() { }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }
}
