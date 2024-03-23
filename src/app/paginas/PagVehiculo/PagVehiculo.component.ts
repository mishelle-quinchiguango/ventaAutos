import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';
import { ActivatedRoute } from '@angular/router';
import { VehiculoService } from '../../servicios/vehiculo.service';

@Component({
  selector: 'app-PagVehiculo',
  templateUrl: './PagVehiculo.component.html',
  styleUrls: ['./PagVehiculo.component.css']
})
export class PagVehiculoComponent implements OnInit {

  vehiculo?: Vehiculo={
    id:"",
    foto:"",
    marca:"",
    modelo:""
    }

  constructor(
    private router: ActivatedRoute,
    private vehiculoService: VehiculoService
  ) { }

  ngOnInit() {
    this.router.params.subscribe(params =>{
      this.vehiculoService.getVehiculoFiltro(params['id']).subscribe(data =>{
        this.vehiculo=data;
      });
    })
  }

}
