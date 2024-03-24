import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';
import { VehiculoService } from '../../servicios/vehiculo.service';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      "id":[],
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

  guardarVehiculo() {
   let vehiculo: Vehiculo={...this.formulario.value}
    this._vehiculoService.addVehiculo(vehiculo);
    Swal.fire({
      title:"Mensaje",
      text:"Se grabo con exito",
      icon:"info"

    });
  }

}
