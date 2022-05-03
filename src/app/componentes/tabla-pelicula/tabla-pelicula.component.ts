import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent  {
  @Input()  listadoPeliculas:Pelicula[]=[];
  @Output() onPeliculaSelccionada:EventEmitter<Pelicula>= new EventEmitter();

  mostrarDetallePelicula(pelicula:Pelicula){
    this.onPeliculaSelccionada.emit(pelicula);
  }

}
