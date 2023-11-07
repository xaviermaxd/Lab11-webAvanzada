import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ubicacion } from '../ubicacion/ubicacion';
import { UbicacionService } from '../ubicacion/ubicacion.service';

@Component({
  selector: 'app-editar-ubicacion',
  templateUrl: './editar-ubicacion.component.html',
  styleUrls: ['./editar-ubicacion.component.css']
})
export class EditarUbicacionComponent {
  ubicacionForm: FormGroup;
  ubicacion: Ubicacion | undefined;
  

  constructor(
    private ubicacionService: UbicacionService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.ubicacionForm = this.fb.group({
      codigo: [{value: '', disabled: true}, Validators.required],
      latitud: ['', Validators.required],
      longitud: ['', Validators.required],
      nombre: ['', Validators.required],
      distrito: ['', Validators.required],
      info: ['', Validators.required]
    });
  }

  ngOnInit() {
    const codigo = this.route.snapshot.paramMap.get('codigo');
  
    if (codigo) {
      this.ubicacion = this.ubicacionService.obtenerUbicacion(codigo);
  
      if (this.ubicacion) {
        this.ubicacionForm.patchValue(this.ubicacion);
      } else {
        this.router.navigate(['/listar-ubicaciones']);
      }
    } else {
      this.router.navigate(['/listar-ubicaciones']);
    }
  }
  

  actualizarUbicacion() {
    const UBICACION_ACTUALIZADO: Ubicacion = {
      codigo: this.ubicacionForm.get('codigo')?.value,
      latitud: this.ubicacionForm.get('latitud')?.value,
      longitud: this.ubicacionForm.get('longitud')?.value,
      nombre: this.ubicacionForm.get('nombre')?.value,
      distrito: this.ubicacionForm.get('distrito')?.value,
      info: this.ubicacionForm.get('info')?.value,
      
    };

    this.ubicacionService.actualizarUbicacion(UBICACION_ACTUALIZADO);
    this.router.navigate(['/listar-ubicaciones']);
  }

  navegarAUbicaciones() {
    this.router.navigate(['/listar-ubicaciones']);
  }
}
