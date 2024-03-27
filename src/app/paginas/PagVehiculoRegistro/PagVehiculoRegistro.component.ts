import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';
import { VehiculoService } from '../../servicios/vehiculo.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-PagVehiculoRegistro',
  templateUrl: './PagVehiculoRegistro.component.html',
  styleUrls: ['./PagVehiculoRegistro.component.css']
})
export class PagVehiculoRegistroComponent implements OnInit {

  vehiculo?: Vehiculo;
  formulario: FormGroup;
  constructor(
    private _vehiculoService: VehiculoService,
    private _formBuilder:FormBuilder
  ) { 
      this.formulario= this._formBuilder.group({
      "codigo":['', [Validators.required,validadorCodigo()]],
      "marca":[],
      "modelo":[],
      "anio":[],
      "color":[],
      "kilometraje":[],
      "precio":[],
      "calificacion":[]
    });
  }

  ngOnInit() {
    
  }

  /*guardarVehiculo() {

    if(this.formulario.valid){
      let vehiculo: Vehiculo={...this.formulario.value}
    this._vehiculoService.addVehiculo(vehiculo);
    Swal.fire({
      title:"Mensaje",
      text:"Se grabo con exito",
      icon:"info"

    });
    }else{
      Swal.fire({
        title:"Mensaje",
        text:"Faltan campos por llenarensaje",
        icon:"error"
      } )

    }
  }*/


  guardarVehiculo() {
    console.log({
      data:this.formulario.value
    })

    if(this.formulario.valid){
     this._vehiculoService.insertVehiculo({...this.formulario.value}).subscribe(
      respuesta =>{
        if(respuesta.codigo=='1'){
          Swal.fire({
            title:"Mensaje",
            text:"Vehiculo registrado con éxito",
            icon:"success"
          } ).then(res=>{
            this.formulario.reset(); });
        }else{
          Swal.fire({
            title:"Mensaje",
            text:"No se pudo registrar el vehculo: "+ respuesta.mensaje,
            icon:"error"
          } );
        }
      }
     );
    }else{
      Swal.fire({
        title:"Mensaje",
        text:"Faltan campos por llenar",
        icon:"error"
      } );

    }
  }
}

export function validadorCodigo(): ValidatorFn {
  return (control: AbstractControl):ValidationErrors | null =>{
    const codigoV=/^\d{4}$/;
    let value=control.value;
    if(codigoV.test(value)){
      return null;
    }
      return ({'codigoValidate': true});

    
  }
  
}
