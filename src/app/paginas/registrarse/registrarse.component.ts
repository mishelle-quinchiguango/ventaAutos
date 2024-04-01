import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../../servicios/Cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _clienteService: ClienteService
    ) {
    this.formulario = this._formBuilder.group({
      id:['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      password: ['', [Validators.required]],
      contacto: [false], 
      telefono: [''],
      email: ['']
    });
  }

  ngOnInit() {
  }


  guardarCliente() {
    console.log({
      data:this.formulario.value
    })

    if(this.formulario.valid){
     this._clienteService.insertCliente({...this.formulario.value}).subscribe(
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
            text:"No se pudo registrar el vehculo: ",
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
