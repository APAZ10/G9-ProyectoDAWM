import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;

    constructor(public location: Location, private element: ElementRef, private cookieService: CookieService,
        private router: Router) {
        this.sidebarVisible = false;
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];

        /*<a class="nav-link" [routerLink]="['login']">
                    <p>Login</p>
                </a>*/
        let idCuenta = this.cookieService.get('idUsuario')
        if (idCuenta !== "") {
            let navItem = document.getElementById("nav5")
            navItem.innerHTML = `<a class="nav-link" ng-reflect-router-link="perfil" href="/perfil">
                                    <p>Perfil</p>
                                 </a>`
            let navBar = document.getElementById("navbarlist")
            navBar.innerHTML += `<li class="nav-item" id="nav6">
                                    <input type="submit" class="btn btn-primary btn-round btn-lg btn-block" value="Log Out" id="btnLogOut">
                                </li>`
            document.getElementById("btnLogOut").addEventListener('click', () => {
                this.cookieService.set('nombre', "");
                this.cookieService.set('idUsuario', ""); 
                this.router.navigate(["/login"]);
            });
        }
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };

    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };

    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };

    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    }
}
