import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ubicacion } from '../ubicacion/ubicacion';
import { UbicacionService } from '../ubicacion/ubicacion.service';

@Component({
  selector: 'app-crear-ubicacion',
  templateUrl: './crear-ubicacion.component.html',
  styleUrls: ['./crear-ubicacion.component.css']
})
export class CrearUbicacionComponent {
  ubicacionForm: FormGroup;

  constructor( private fb: FormBuilder,
    private router: Router, private ubicacionService: UbicacionService){


  this.ubicacionForm = this.fb. group({
        codigo: ['', Validators. required],
        latitud: ['', Validators. required],
        longitud: ['', Validators. required],
        nombre: ['', Validators. required],
        distrito: ['', Validators. required],
        info: ['', Validators. required],
      })

  }

  agregarUbicacion(){
    const UBICACION: Ubicacion = {
    codigo: this.ubicacionForm.get('codigo')?.value,
    latitud: this.ubicacionForm.get('latitud')?.value,
    longitud: this.ubicacionForm.get('longitud')?.value, 
    nombre: this.ubicacionForm.get('nombre')?.value,
    distrito: this.ubicacionForm.get('distrito')?.value,
    info: this.ubicacionForm.get('info')?.value, 
    }

    this.ubicacionService.agregarUbicacion(UBICACION);
    this.router.navigate(['/listar-ubicaciones']);
  }

  navegarAUbicaciones() {
    this.router.navigate(['/listar-ubicaciones']);
  }
}
