import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { VehiculoService } from './servicios/vehiculo.service';
import { ListaAutosComponent } from './paginas/lista-autos/lista-autos.component';
import { PagNotFoundComponent } from './paginas/PagNotFound/PagNotFound.component';

const routes: Routes = [
  {
    path: "home", 
    component: HomeComponent
  },
  {
    path: "vehiculo", 
    component: ListaAutosComponent
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
