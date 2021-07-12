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
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    }

    ngOnDestroy(): void {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }
}
