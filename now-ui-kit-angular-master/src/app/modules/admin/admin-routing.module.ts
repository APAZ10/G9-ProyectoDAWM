import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { ReportesComponent } from './components/reportes/reportes.component';

const routes: Routes = [
  { path: '', redirectTo: 'control-panel', pathMatch: 'full' },
  {
    path: 'control-panel',
    component: ControlPanelComponent
  },
  {
    path: 'reportes',
    component: ReportesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
