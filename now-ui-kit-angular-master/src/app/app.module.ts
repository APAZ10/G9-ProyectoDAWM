import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AdminModule } from './modules/admin/admin.module';
import { ClienteLayoutComponent } from './layouts/cliente-layout/cliente-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ClienteLayoutComponent,
        AdminLayoutComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        AdminModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
