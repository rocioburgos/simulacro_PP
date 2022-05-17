import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActoresService } from 'src/app/servicios/actores.service';

@Component({
  selector: 'app-listado-actor',
  templateUrl: './listado-actor.component.html',
  styleUrls: ['./listado-actor.component.css']
})
export class ListadoActorComponent implements OnInit {

  @Output() onActorElegido: EventEmitter<string> = new EventEmitter();
  opcionSeleccionado:string='';
  actores:any[];
  constructor(private actorSrv:ActoresService ) { }

  ngOnInit(): void {
    this.actorSrv.getAll().subscribe((res) => {
      this.actores = res; 
    });

  }  

  mostrarPeliculas(actor:any){
    let respuesta=  this.actores.find(element => element.apellido== actor.apellido && element.nombre == actor.nombre)
    let fullName= respuesta.nombre+" "+respuesta.apellido;
   
    this.onActorElegido.emit(respuesta.email); 
  }

  mostrarDetalleActor(actor:any){

  }

}
