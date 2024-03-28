import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  formulario: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.formulario = this._formBuilder.group({
      nombre: ['', [Validators.required]],
      contraseña: ['', [Validators.required]],
      contacto: [false], 
      correo: [''],
      telefono: ['']
    });
  }

  ngOnInit() {
  }

  guardarCliente() {
        alert("Se registró correctamente");
  }
}
