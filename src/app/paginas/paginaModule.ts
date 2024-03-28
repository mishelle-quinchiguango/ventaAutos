import { NgModule } from "@angular/core";
import { ListaAutosComponent } from "./lista-autos/lista-autos.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { utilitariosModule } from "../utilitarios/utilitariosModule";
import { PagVehiculoComponent } from "./PagVehiculo/PagVehiculo.component";
import { RouterModule } from "@angular/router";
import { PagVehiculoRegistroComponent } from "./PagVehiculoRegistro/PagVehiculoRegistro.component";
import { RegistrarseComponent } from "./registrarse/registrarse.component";

@NgModule({
    
    declarations:[
        ListaAutosComponent,
        PagVehiculoComponent,
        PagVehiculoRegistroComponent,
        RegistrarseComponent
        
    ],
    imports:[
        CommonModule,
        FormsModule,
        utilitariosModule,
        RouterModule,
        ReactiveFormsModule
        
    ],
    exports:[
        ListaAutosComponent,
        PagVehiculoComponent,
        PagVehiculoRegistroComponent
    ]
})


export class paginaModule{

}