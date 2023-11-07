import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductosComponent } from './pages/productos/crear-productos/crear-productos.component';
import { EditarProductosComponent } from './pages/productos/editar-productos/editar-productos.component';
import { ListarProductosComponent } from './pages/productos/listar-productos/listar-productos.component';
import { ListarUbicacionComponent } from './pages/ubicaciones/listar-ubicacion/listar-ubicacion.component';
import { CrearUbicacionComponent } from './pages/ubicaciones/crear-ubicacion/crear-ubicacion.component';
import { EditarUbicacionComponent } from './pages/ubicaciones/editar-ubicacion/editar-ubicacion.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { LoginComponent } from './pages/users/login/login.component';
import { TiendasComponent } from './pages/tiendas/tiendas.component';

const routesInicio: Routes = [
  { path: '', component: LoginComponent },
  { path: 'crear-usuario', component: CreateUserComponent },
  { path: 'listar-productos', component: ListarProductosComponent },
  { path: 'crear-productos', component: CrearProductosComponent },
  { path: 'editar-producto/:id', component: EditarProductosComponent },
  { path: 'tiendas', component: TiendasComponent },
  { path: 'listar-ubicacion', component: ListarUbicacionComponent },
  { path: 'crear-ubicacion', component: CrearUbicacionComponent },
  { path: 'editar-ubicacion/:codigo', component: EditarUbicacionComponent },
  { path: '**', redirectTo: '/listar-ubicacion', pathMatch: 'full'}
];



@NgModule({
  imports: [RouterModule.forRoot(routesInicio)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
