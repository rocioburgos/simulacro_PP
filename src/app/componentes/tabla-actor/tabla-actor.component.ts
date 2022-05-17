import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { ActoresService } from 'src/app/servicios/actores.service';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent   {

 
  @Output() onActorElegido: EventEmitter<string> = new EventEmitter();
  opcionSeleccionado:string='';
  actores:any[];
  constructor(private actorSrv:ActoresService ) { }

  ngOnInit(): void {
    this.actorSrv.getAll().subscribe((res) => {
      this.actores = res;
      console.log(res)
    });

  } 

  capturar() {  
  let respuesta=  this.actores.find(element => element.doc_id= this.opcionSeleccionado)
   let fullName= respuesta.nombre+" "+respuesta.apellido;
   
    this.onActorElegido.emit(fullName); 
  }
}
