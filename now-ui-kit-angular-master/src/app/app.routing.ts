import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ContactoComponent } from './components/contacto/contacto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { ClienteLayoutComponent } from './layouts/cliente-layout/cliente-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CanchaComponent } from './modules/cancha/cancha.component';
import { EditCanchaComponent } from './modules/admin/components/edit-cancha/edit-cancha.component';

const routes: Routes =[
    {
        path: '',
        component: ClienteLayoutComponent,
        children: [
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
                path: 'cancha',
                component: CanchaComponent
            }
        ]
    },
    {
        path: 'admin',
        component: AdminLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
            }
        ]
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
