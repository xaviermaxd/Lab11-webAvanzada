import { Component } from '@angular/core';
import { UbicacionService } from '../ubicaciones/ubicacion/ubicacion.service';

interface MarkerProperties {
  position: {
    lat: number;
    lng: number;
  },
  label: {
    color: string;
    text: string;
    fontSize: string;
    fontWeight: string;
  },
  title: string,
  info: string
};


@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.css']
})
export class TiendasComponent {
  markers: MarkerProperties[] = [];
  

  mapSantaAnita: google.maps.MapOptions = {
    center: { lat: -12.03581, lng: -76.958392 },
    zoom: 14,
    mapTypeControl: false
  };

  mapSanMiguel: google.maps.MapOptions = {
    center: { lat: -12.078024, lng: -77.081620 },
    zoom: 14,
    mapTypeControl: false
  };

  mapSanIsidro: google.maps.MapOptions = {
    center: { lat: -12.096574, lng: -77.035287 },
    zoom: 14,
    mapTypeControl: false
  };

  currentMap: google.maps.MapOptions = this.mapSantaAnita; 

  changeMap(location: string) {
      switch(location) {
          case 'Santa Anita':
              this.currentMap = this.mapSantaAnita;
              break;
          case 'San Miguel':
              this.currentMap = this.mapSanMiguel;
              break;
          case 'San Isidro':
              this.currentMap = this.mapSanIsidro;
              break;
      }
  }

  // markers: MarkerProperties[] = [
  //   { position: { lat: -12.0491625, lng: -76.9554737 }, 
  //     label: { color: 'black', text: 'Tienda N°1', fontSize: '20px', fontWeight: 'bold' },
  //     title: 'ciudad',
  //     info: 'ciudad de los reyes'
  //      }, // Tecsup
  //   { position: { lat: -12.0331625, lng: -76.9554737 }, 
  //     label: { color: 'black', text: 'Tienda N°2', fontSize: '20px', fontWeight: 'bold'  },
  //     title: 'ciudad',
  //     info: 'ciudad de los reyes'
  //      }, // Tecsup }, // Louvre Museum
  //   { position: { lat: -12.0331625, lng: -76.9689937 }, 
  //     label: { color: 'black', text: 'Tienda N°3', fontSize: '20px', fontWeight: 'bold'  },
  //     title: 'ciudad',
  //     info: 'ciudad de los reyes'
  //      }, // Tecsup }, // Cathédrale Notre-Dame de Paris
  // ];

  // handleMapInitialized(map: google.maps.Map) {
  //   this.markers.forEach((marker: MarkerProperties) => {
  //     new google.maps.Marker({
  //       position: marker.position,
  //       label: marker.label,
  //       map,})
  //   });
  // }
  constructor(private ubicacionService: UbicacionService) {
    this.ubicacionService.ubicaciones$.subscribe(ubicaciones => {
      this.markers = ubicaciones.map(ubicacion => ({
        position: { lat: ubicacion.latitud, lng: ubicacion.longitud },
        label: { color: 'black', text: ubicacion.nombre, fontSize: '20px', fontWeight: 'bold' },
        title: ubicacion.distrito,
        info: ubicacion.info
      }));
    });
  }

  handleMapInitialized(map: google.maps.Map) {
    this.markers.forEach((marker: MarkerProperties) => {
      new google.maps.Marker({
        position: marker.position,
        label: marker.label,
        map,})
    });
  }

  verTiendas( distrito: string){

    if(distrito = 'Santa Anita'){
      this.verSantaAnita();
    }
    if(distrito = 'San Miguel'){
      this.verSanMiguel();
    }
    if(distrito = 'San Isidro'){
      this.verSanIsidro();
    }

  }
  
  verSantaAnita(){

  }

  verSanMiguel(){

  }

  verSanIsidro(){

  }

  

}
