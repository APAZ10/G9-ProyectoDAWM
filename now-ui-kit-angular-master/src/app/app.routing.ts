import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ContactoComponent } from './components/contacto/contacto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { NoticiasComponent } from './components/noticias/noticias.component';

const routes: Routes =[
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    {
        path: 'inicio',
        component: InicioComponent
    },
    {
        path: 'contacto',
        component: ContactoComponent
    },
    {
        path: 'equipo',
        component: EquipoComponent
    },
    {
        path: 'noticias',
        component: NoticiasComponent
    },
    {
        path: '**',
        component: InicioComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
