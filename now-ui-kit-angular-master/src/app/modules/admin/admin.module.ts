import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { BarComponent } from './components/reportes/graficos/bar/bar.component';
import { PieComponent } from './components/reportes/graficos/pie/pie.component';
import { ScatterComponent } from './components/reportes/graficos/scatter/scatter.component';


@NgModule({
  declarations: [
    ControlPanelComponent,
    ReportesComponent,
    BarComponent,
    PieComponent,
    ScatterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
