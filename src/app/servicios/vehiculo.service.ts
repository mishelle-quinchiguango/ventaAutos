import { Injectable } from '@angular/core';
import { Vehiculo } from '../utilitarios/modelos/Vehiculo';



@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

constructor() { }

getVehiculo(){
  return this.listaAutos
}

private listaAutos: Array <Vehiculo>=[
  {"id":"1","foto":'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_7fe28e653a23491e83df7fddae8ae8d2.jpg',"marca":"Chevrolet","modelo":"Silverado-a","anio":2004,"color":"Blanco","kilometros":"1000","precio":21300,"calificacion":2},
  {"id":"2","foto":'https://images.patiotuerca.com/thumbs/w/990x540xC/amz_ptf_ecuador/2292022/1693286/o_o/pt_1693286_11445403.jpg',"marca":"Suzuki","modelo":"Gran Vitara","anio":2014,"color":"Plomo","kilometros":"2190","precio":11900,"calificacion":3},
  {"id":"3","foto":'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjg1MzU5L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNzAwMTQ3NDYwODExLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',"marca":"Chevrolet","modelo":"Aveo","anio":2018,"color":"Blanco","kilometros":"150000","precio":9900,"calificacion":3},
  {"id":"4","foto":'https://queautocompro.com/wp-content/uploads/2022/09/nissankicks202201.jpg',"marca":"Nissan","modelo":"Kicks","anio":2019,"color":"Vino","kilometros":"17000","precio":18900,"calificacion":4},
  {"id":"5","foto":'https://images.patiotuerca.com/thumbs/w/800x500xC/amz_ptf_ecuador/732024/1811460/o_o/1811460_1709828921297_518.jpg',"marca":"Kia","modelo":"Sportage SL","anio":2020,"color":"Blanco","kilometros":"53000","precio":22900,"calificacion":3}

];


}
