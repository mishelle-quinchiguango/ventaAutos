import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../servicios/vehiculo.service';

@Component({
  selector: 'lista-autos',
  templateUrl: './lista-autos.component.html',
  styleUrls: ['./lista-autos.component.css']
})
export class ListaAutosComponent{

  tituloListaAutos: string="Lista de Automóviles";
 
  muestraImagen: boolean= false;

  listaAutos: Array<any>=[];
  private _filtro:string="";

  get filtro(){
    return this._filtro
  }

  set filtro(data:string){
    this._filtro=data;
    this.consultarVehiculo();

  }

  constructor(
    private _vehiculoService: VehiculoService
  ){ }

  ngOnInit(){
    this.consultarVehiculo();
 
  }
  
  mostrarImagen():void{   //funcion para mostrar imagenes
    this.muestraImagen=!this.muestraImagen

  }

  consultarVehiculo(){
    this._vehiculoService.getVehiculos(this.filtro).subscribe(data=>{
      this.listaAutos=data;
  
     });
   }

   recepcion(dato: number){
    alert("Dieron clic en la calificación:  "+ dato)

  }

}

