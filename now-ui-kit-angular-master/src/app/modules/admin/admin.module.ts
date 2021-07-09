import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { ReportesComponent } from './components/reportes/reportes.component';


@NgModule({
  declarations: [
    ControlPanelComponent,
    ReportesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
