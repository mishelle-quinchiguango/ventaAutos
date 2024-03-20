import { NgModule } from "@angular/core";
import { ListaAutosComponent } from "./lista-autos/lista-autos.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { utilitariosModule } from "../utilitarios/utilitariosModule";

@NgModule({
    
    declarations:[
        ListaAutosComponent
        
    ],
    imports:[
        CommonModule,
        FormsModule,
        utilitariosModule,
        
    ],
    exports:[
        ListaAutosComponent
    ]
})


export class paginaModule{

}