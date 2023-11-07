import { Component } from '@angular/core';
import { Ubicacion } from '../ubicacion/ubicacion';
import { UbicacionService } from '../ubicacion/ubicacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-ubicacion',
  templateUrl: './listar-ubicacion.component.html',
  styleUrls: ['./listar-ubicacion.component.css']
})
export class ListarUbicacionComponent {
  ubicaciones: Ubicacion[] = [];

  constructor(private ubicacionService: UbicacionService, private router: Router) { }

  ngOnInit() {
    this.ubicacionService.ubicaciones$.subscribe(ubicaciones => {
      this.ubicaciones = ubicaciones;
    });
  }

  navegarACrearUbicacion() {
    this.router.navigate(['/crear-ubicacion']);
  }

  eliminarUbicacion(codigo: string) {
    this.ubicacionService.eliminarUbicacion(codigo);
    // Actualiza la lista de ubicaciones después de eliminar
    this.ubicacionService.ubicaciones$.subscribe(ubicaciones => {
      this.ubicaciones = ubicaciones;
    });
  }

  navegarEditarUbicacion(codigo: string) {
    this.router.navigate(['/editar-ubicacion', codigo]);
  }
}
