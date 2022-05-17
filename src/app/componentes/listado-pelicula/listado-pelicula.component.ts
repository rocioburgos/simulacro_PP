import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-listado-pelicula',
  templateUrl: './listado-pelicula.component.html',
  styleUrls: ['./listado-pelicula.component.css']
})
export class ListadoPeliculaComponent implements OnInit {

  @Input() actor:string='';//id del actor en firebase
  listaPeliculasActor:Pelicula[];
  constructor(private peliSrv:PeliculasService) { 
   
   }

  ngOnInit(): void {
  }

}
