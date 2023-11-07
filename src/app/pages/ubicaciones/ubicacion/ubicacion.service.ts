import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ubicacion } from './ubicacion';

@Injectable({
    providedIn: 'root'
})
export class UbicacionService {
    private ubicaciones = new BehaviorSubject<Ubicacion[]>([
        {
            codigo: 'U1',
            latitud: -12.0491625,
            longitud: -76.9554737,
            nombre: 'Tienda N°1',
            distrito: 'Santa Anita',
            info: 'ciudad de los reyes'
        },
        {
            codigo: 'U2',
            latitud: -12.0331625,
            longitud: -76.9554737,
            nombre: 'Tienda N°2',
            distrito: 'Santa Anita',
            info: 'ciudad de los reyes'
        },
        {
            codigo: 'U3',
            latitud: -12.0331625,
            longitud: -76.9689937,
            nombre: 'Tienda N°3',
            distrito: 'Santa Anita',
            info: 'ciudad 2'
        }
    ]);
    ubicaciones$ = this.ubicaciones.asObservable();

    agregarUbicacion(ubicacion: Ubicacion) {
        this.ubicaciones.next([...this.ubicaciones.value, ubicacion]);
    }

    eliminarUbicacion(codigo: string) {
        this.ubicaciones.next(this.ubicaciones.value.filter(ubicacion => ubicacion.codigo !== codigo));
    }

    obtenerUbicacion(codigo: string): Ubicacion | undefined {
        return this.ubicaciones.value.find(ubicacion => ubicacion.codigo === codigo);
    }

    actualizarUbicacion(ubicacionActualizado: Ubicacion) {
        this.ubicaciones.next(
            this.ubicaciones.value.map(ubicacion =>
                ubicacion.codigo === ubicacionActualizado.codigo ? ubicacionActualizado : ubicacion
            )
        );
    }
}
