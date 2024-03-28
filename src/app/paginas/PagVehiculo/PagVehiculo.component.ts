import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';
import { ActivatedRoute } from '@angular/router';
import { VehiculoService } from '../../servicios/vehiculo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validadorCodigo } from '../../validaciones/VehiculoValidaciones';
import Swal from 'sweetalert2';

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
    private _formBuilder:FormBuilder,
    private activatedRoute:ActivatedRoute
    
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
    this.formulario.controls['codigo'].disable();

  }

  ngOnInit() {
    /*this.router.params.subscribe(params =>{
      this.vehiculoService.getVehiculoFiltro(params['codigo']).subscribe(data =>{
        this.vehiculo=data;
      });
    })*/

    this.activatedRoute.params.subscribe(params =>{
      this.vehiculoService.getVehiculo(params['codigo']).subscribe(data =>{
        if(data.codigo=='1'){
          this.vehiculo=data.data;
          this.formulario.controls['codigo'].setValue(this.vehiculo?.codigo);
          this.formulario.controls['marca'].setValue(this.vehiculo?.marca);
          this.formulario.controls['modelo'].setValue(this.vehiculo?.modelo);
          this.formulario.controls['anio'].setValue(this.vehiculo?.anio);
          this.formulario.controls['calificacion'].setValue(this.vehiculo?.calificacion);
          this.formulario.controls['precio'].setValue(this.vehiculo?.precio);
          this.formulario.controls['kilometraje'].setValue(this.vehiculo?.kilometraje);

        }else{
          Swal.fire({
            title:"Mensaje",
            text:"No se pudo cargar la información",
            icon:"error"
          })
        }
      });
    })
  }

  guardar(){
    if(this.formulario.valid){
      this.vehiculoService.actualizarVehiculo({...this.formulario.value},this.formulario.controls['codigo'].value).subscribe(data =>{
        if(data.codigo=='1'){
          Swal.fire({
            title:"Mensaje",
            text:"Vehiculo actualizado con éxito",
            icon:"info"
          })
        }
      });

    }else{
      Swal.fire({
        title:"Mensaje",
        text:"Faltan llenar campos",
        icon:"error"
      })
    }
  }

}
