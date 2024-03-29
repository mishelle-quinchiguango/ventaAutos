import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../servicios/vehiculo.service';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';
import Swal from 'sweetalert2';

@Component({
  selector: 'lista-autos',
  templateUrl: './lista-autos.component.html',
  styleUrls: ['./lista-autos.component.css']
})
export class ListaAutosComponent{

  tituloListaAutos: string="Lista de Automóviles";
 
  muestraImagen: boolean= false;

  listaAutos: Array<Vehiculo>=[];
  private _filtro:string="";

  get filtro(){
    return this._filtro
  }

  set filtro(data:string){
    this._filtro=data;
    //this.consultarVehiculo();

  }


  constructor(
    private _vehiculoService: VehiculoService,
    
  ){ 

    
  }

  ngOnInit(){
    this.consultarVehiculo();
       
   

  }
  
  mostrarImagen():void{   //funcion para mostrar imagenes
    this.muestraImagen=!this.muestraImagen

  }

  /*consultarVehiculo(){
    this._vehiculoService.getVehiculos(this.filtro).subscribe(data=>{
      this.listaAutos=data;
  
     });
   }*/

   recepcion(dato: number){
    alert("Dieron clic en la calificación:  "+ dato)

  }


  eliminar(codigo:string){
    Swal.fire({
      title:"Estpas seguro de eliminar este registro",
      showCancelButton:true,
      confirmButtonText:"Si",
      cancelButtonText:"No",
      icon:"question"
    }).then((res)=>{
      if(res.isConfirmed){
        this._vehiculoService.eliminarVehiculo(codigo).subscribe(data=>{
          if(data.codigo=='1'){
            this.consultarVehiculo();
            Swal.fire({
              title:"Mensaje",
              text:"Vehiculo eliminado con éxito",
              icon:"success"
            })
          }
        })
        
      }
    })
  }

  consultarVehiculo(){
    this._vehiculoService.getVehiculos().subscribe(respuestaAPI =>{
      console.log(respuestaAPI);
      this.listaAutos=respuestaAPI;
    });
  }



}

