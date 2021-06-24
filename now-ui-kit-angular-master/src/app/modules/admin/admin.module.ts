import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { SidebarComponent } from 'app/shared/sidebar/sidebar.component';


@NgModule({
  declarations: [
    ControlPanelComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
