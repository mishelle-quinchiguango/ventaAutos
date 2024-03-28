import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { VehiculoService } from './servicios/vehiculo.service';
import { ListaAutosComponent } from './paginas/lista-autos/lista-autos.component';
import { PagNotFoundComponent } from './paginas/PagNotFound/PagNotFound.component';
import { PagVehiculoComponent } from './paginas/PagVehiculo/PagVehiculo.component';
import { PagVehiculoRegistroComponent } from './paginas/PagVehiculoRegistro/PagVehiculoRegistro.component';
import { RegistrarseComponent } from './paginas/registrarse/registrarse.component';

const routes: Routes = [
  {
    path: "home", 
    component: HomeComponent
  },
  {
    path: "vehiculos", 
    component: ListaAutosComponent
  },
  {
    path: "registrarse", 
    component: RegistrarseComponent
  },
  {
    path: "vehiculoRegistro", 
    component: PagVehiculoRegistroComponent
  },
  {
    path: "vehiculo/:codigo", 
    component: PagVehiculoComponent
  },
  {
    path: "", 
    component: HomeComponent,
    pathMatch:"full"
  },
  {
    path: "**", 
    component: PagNotFoundComponent,
    pathMatch:"full"
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
