import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';

@Component({
  selector: 'app-PagVehiculo',
  templateUrl: './PagVehiculo.component.html',
  styleUrls: ['./PagVehiculo.component.css']
})
export class PagVehiculoComponent implements OnInit {

  vehiculo: Vehiculo={
    id:"1",
    foto:"",
    marca:"chevrolet",
    modelo:"onix",
    anio:2022,
    color:"rojo",
    kilometros:"20845",
    precio:6022,
    calificacion:4
  }

  constructor() { }

  ngOnInit() {
  }

}
