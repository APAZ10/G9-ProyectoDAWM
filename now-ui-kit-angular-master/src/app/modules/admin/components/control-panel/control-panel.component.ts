import { Component, OnInit } from '@angular/core';
import { Cancha } from 'app/interfaces/cancha';
import { CanchasService } from 'app/services/canchas/canchas.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {
  
  canchas: Cancha[];

  constructor(
    private canchasService: CanchasService
  ) { }

  ngOnInit(): void {
    this.fetchCanchas();
  }

  private fetchCanchas(): void {
    this.canchasService.list().subscribe((data) => {
      this.canchas = data.canchas;
    });
  }

  deleteCancha(id: string): void {
    this.canchasService.delete(id);
  }

}
