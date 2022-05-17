import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pelicula-actor',
  templateUrl: './pelicula-actor.component.html',
  styleUrls: ['./pelicula-actor.component.css']
})
export class PeliculaActorComponent implements OnInit {

  actor:string;
  constructor() { }

  ngOnInit(): void {
  }

  actorRecibidoPorOutput(actor:any){ 
    this.actor= actor; 
  }
}
