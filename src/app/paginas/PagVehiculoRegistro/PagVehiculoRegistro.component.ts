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
      "id":['', [Validators.required,validadorCodigo()]],
      "marca":[],
      "modelo":[],
      "anio":[],
      "color":[],
      "kilometros":[],
      "precio":[],
      "calificacion":[]
    });
  }

  ngOnInit() {
    
  }

  guardarVehiculo() {

    if(this.formulario.valid){
      let vehiculo: Vehiculo={...this.formulario.value}
    this._vehiculoService.addVehiculo(vehiculo);
    Swal.fire({
      title:"Mensaje",
      text:"Se grabo con exito",
      icon:"info"

    });
    }else{
      alert('Faltan campos por llenar')

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
