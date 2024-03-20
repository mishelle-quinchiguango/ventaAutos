import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../servicios/vehiculo.service';

@Component({
  selector: 'lista-autos',
  templateUrl: './lista-autos.component.html',
  styleUrls: ['./lista-autos.component.css']
})
export class ListaAutosComponent{

  tituloListaAutos: string="Lista de Automóviles";
 
  private _filtro:string="";

  get filtro(): string{
    return this._filtro
  }

  set filtro(valorFiltro:string){
    console.log(valorFiltro)

  }

  muestraImagen: boolean= false;

  listaAutos: Array<any>=[];

  constructor(
    private _vehiculoService: VehiculoService
  ){ }

  ngOnInit(){
   this.listaAutos=this._vehiculoService.getVehiculo();
    
  }
  
  mostrarImagen():void{   //funcion para mostrar imagenes
    this.muestraImagen=!this.muestraImagen

  }
  

  recepcion(dato: number){
    alert("Dieron clic en la calificación:  "+ dato)

  }

}

