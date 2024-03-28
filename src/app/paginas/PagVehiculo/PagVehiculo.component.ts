import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';
import { ActivatedRoute } from '@angular/router';
import { VehiculoService } from '../../servicios/vehiculo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validadorCodigo } from '../../validaciones/VehiculoValidaciones';

@Component({
  selector: 'app-PagVehiculo',
  templateUrl: './PagVehiculo.component.html',
  styleUrls: ['./PagVehiculo.component.css']
})
export class PagVehiculoComponent implements OnInit {
  formulario: FormGroup;

  vehiculo?: Vehiculo={
    codigo:"",
    foto:"",
    marca:"",
    modelo:""
    }

  constructor(
    private router: ActivatedRoute,
    private vehiculoService: VehiculoService,
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
    this.router.params.subscribe(params =>{
      this.vehiculoService.getVehiculoFiltro(params['codigo']).subscribe(data =>{
        this.vehiculo=data;
      });
    })
  }

  guardar(){
    alert("se guardo con exito")
  }

}
