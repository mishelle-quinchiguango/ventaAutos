import { NgModule } from "@angular/core";
import { ListaAutosComponent } from "./lista-autos/lista-autos.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { utilitariosModule } from "../utilitarios/utilitariosModule";
import { PagVehiculoComponent } from "./PagVehiculo/PagVehiculo.component";
import { RouterModule } from "@angular/router";

@NgModule({
    
    declarations:[
        ListaAutosComponent,
        PagVehiculoComponent
        
    ],
    imports:[
        CommonModule,
        FormsModule,
        utilitariosModule,
        RouterModule
        
    ],
    exports:[
        ListaAutosComponent,
        PagVehiculoComponent
    ]
})


export class paginaModule{

}