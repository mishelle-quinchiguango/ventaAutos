import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.css']
})
export class CalificacionComponent implements OnInit {

  @Input() calificacionEntrante:number=0;

  @Output() startsClic =new EventEmitter<any>();

  listaEstrella:Array <any>=[]

  constructor() { }

  ngOnInit() {

    for(let i=0; i<this.calificacionEntrante;i++){
      this.listaEstrella.push(1)
    } 
  }

  onClicStarts(){
    this.startsClic.emit(this.calificacionEntrante)
  }

}
