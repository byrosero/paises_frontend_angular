import { Component, inject, signal } from '@angular/core';
import { PaisesService } from '../../services/paises-service.js';
import { Pais } from '../../models/pais-interface.js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pais-component',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './pais-component.html',
  styleUrl: './pais-component.css',
})
export class PaisComponent {

  private paisService = inject(PaisesService);

  
  paises: Pais[] = [];

  cargarPaises() {
    this.paisService.obtenerPaises().subscribe((data: Pais[]) => {
      console.log(data);
      this.paises = data;
    });
  }

  ngOnInit(): void {
    this.cargarPaises();
  }

}



