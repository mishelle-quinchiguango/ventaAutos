import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Cliente } from '../utilitarios/modelos/Cliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private http: HttpClient
  ) { }
  
  baseUrl= "http://www.epico.gob.ec/vehiculo/public/api/";
  
  httpOptions={
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }

  getClientes():Observable <Cliente[]>{
    return this.http.get <Respuesta>(
      this.baseUrl+"clientes/").pipe(
        map(respuesta => 
          respuesta.data
         )
      );
  }
  

  insertCliente(cliente: Cliente){
  
    return this.http.post<Respuesta>(this.baseUrl+"cliente/",cliente,this.httpOptions);
  
  }

  

}

export interface Respuesta{
  codigo:string;
  mensaje: string;
  data: Array<Cliente>| Cliente|any;



}