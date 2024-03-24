import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';
import { VehiculoService } from '../../servicios/vehiculo.service';

@Component({
  selector: 'app-PagVehiculoRegistro',
  templateUrl: './PagVehiculoRegistro.component.html',
  styleUrls: ['./PagVehiculoRegistro.component.css']
})
export class PagVehiculoRegistroComponent implements OnInit {

  vehiculo: Vehiculo

  constructor(
    private _vehiculoService: VehiculoService
  ) { 
    this.vehiculo={
      id: '',
      marca: '',
      color: '',
      modelo: '',
      kilometros: '',
      precio: 0,
      foto: '',
      anio: 0,
      calificacion: 0,
    }
  }

  ngOnInit() {
  }

  guardarVehiculo() {
    this._vehiculoService.addVehiculo(this.vehiculo);
    console.log('Guardado con éxito')
  }

}
