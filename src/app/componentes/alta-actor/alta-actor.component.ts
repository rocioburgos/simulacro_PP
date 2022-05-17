import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Pais } from 'src/app/clases/pais';
import { ActoresService } from 'src/app/servicios/actores.service';

@Component({
  selector: 'app-alta-actor',
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.css']
})
export class AltaActorComponent implements OnInit {
  nombre: string = '';
  apellido: string = '';
  username: string = '';
  email: string = '';
  pais: string = '';
  registroOk?:boolean;
  constructor(private actorSrv:ActoresService) { }

  ngOnInit(): void {
  }

  onRegistro() { 
    
    let nuevoActor= new Actor(this.nombre, this.apellido, this.email, this.pais);
    this.actorSrv.addItem(nuevoActor).then((res)=>{
      console.log(res.id) 
      if(res.id=='' || res.id== null){
        this.registroOk=false;
      }else{
        this.registroOk= true;
      }
    });
  }

  paisSeleciconado(pais: string) {
    this.pais = pais;
  }
}