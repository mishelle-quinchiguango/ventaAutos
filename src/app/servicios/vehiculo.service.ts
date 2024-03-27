import { Injectable } from '@angular/core';
import { Vehiculo } from '../utilitarios/modelos/Vehiculo';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

constructor(
  private http: HttpClient
) { }

baseUrl= "http://www.epico.gob.ec/vehiculo/public/api/";

getVehiculos():Observable <Vehiculo[]>{
  return this.http.get <Respuesta>(
    this.baseUrl+"vehiculos/").pipe(
      map(respuesta => 
        respuesta.data
       )
    );
}

/*getVehiculos( filtro: any): Observable <Array<Vehiculo>>{
  const escucha: Observable <Array<Vehiculo>> = new Observable(escuchando=>{
    let listaFiltro= this.listaAutos.filter(ele=> ele.marca.toLowerCase().includes(filtro.toLowerCase));
    escuchando.next(listaFiltro);

  } );
  return escucha;
}
*/

insertVehiculo(vehiculo: Vehiculo){
  let httpOptions={
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }
  return this.http.post<Respuesta>(this.baseUrl+"vehiculo/",vehiculo,httpOptions); //httOption le dice  q le pasa un tipo json 

}


getVehiculoFiltro(codigo: string):Observable <Vehiculo|undefined>{
  const escucha: Observable <Vehiculo|undefined> = new Observable(escuchando=>{
    let vehiculo= this.listaAutos.find(ele=> ele.codigo===codigo);
    escuchando.next(vehiculo);

  } );
   return escucha;
}


addVehiculo(vehiculo: Vehiculo){
  this.listaAutos.push(vehiculo);

}


private listaAutos: Array <Vehiculo>=[
  {"codigo":"1","foto":'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_7fe28e653a23491e83df7fddae8ae8d2.jpg',"marca":"Chevrolet","modelo":"Silverado-a","anio":2004,"color":"Blanco","kilometraje":"1000","precio":21300,"calificacion":2},
  {"codigo":"2","foto":'https://images.patiotuerca.com/thumbs/w/990x540xC/amz_ptf_ecuador/2292022/1693286/o_o/pt_1693286_11445403.jpg',"marca":"Suzuki","modelo":"Gran Vitara","anio":2014,"color":"Plomo","kilometraje":"2190","precio":11900,"calificacion":3},
  {"codigo":"3","foto":'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjg1MzU5L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNzAwMTQ3NDYwODExLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',"marca":"Chevrolet","modelo":"Aveo","anio":2018,"color":"Blanco","kilometraje":"150000","precio":9900,"calificacion":3},
  {"codigo":"4","foto":'https://queautocompro.com/wp-content/uploads/2022/09/nissankicks202201.jpg',"marca":"Nissan","modelo":"Kicks","anio":2019,"color":"Vino","kilometraje":"17000","precio":18900,"calificacion":4},
  {"codigo":"5","foto":'https://images.patiotuerca.com/thumbs/w/800x500xC/amz_ptf_ecuador/732024/1811460/o_o/1811460_1709828921297_518.jpg',"marca":"Kia","modelo":"Sportage SL","anio":2020,"color":"Blanco","kilometraje":"53000","precio":22900,"calificacion":3}

];


}

export interface Respuesta{
  codigo:string;
  mensaje: string;
  data: Array<Vehiculo>| Vehiculo|any;

}

