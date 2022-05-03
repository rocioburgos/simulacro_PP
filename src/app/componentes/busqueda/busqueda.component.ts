import { Component, OnInit } from '@angular/core';
import { eTipo } from 'src/app/clases/eTipo';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent  {

  peliculas: Pelicula[]=[
    {id: 1, Nombre: 'Shrek', tipo: eTipo.Comedia, fechaEstreno:'18/05/2001', cantidadPublico:10, fotoPelicula:'https://xl.movieposterdb.com/21_09/2001/126029/xl_126029_26c17ee4.jpg'},
    {id: 2, Nombre: 'Shrek 2 ', tipo: eTipo.Comedia, fechaEstreno:'21/05/2004', cantidadPublico:10, fotoPelicula:'https://static.posters.cz/image/750/posters/shrek-2-one-sheet-i653.jpg'},
    {id: 3, Nombre: 'Shrek Tercero', tipo: eTipo.Comedia, fechaEstreno:'18/05/2007', cantidadPublico:10, fotoPelicula:'https://es.web.img3.acsta.net/medias/nmedia/18/68/23/20/20054548.jpg'},
    {id: 4, Nombre: 'Shrek Para Siempre', tipo: eTipo.Comedia, fechaEstreno:'21/05/2010', cantidadPublico:10, fotoPelicula:'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/17c2c2152f507492dcbae81b3fcfa43c1fd82cbf75d168b8d2b2331bbbd5712f._RI_V_TTW_.jpg'}

  ];
  peliculaDetalle?:Pelicula;
 
  mostrarDetallePelicula(peliculaRecibida:Pelicula){
      this.peliculaDetalle= peliculaRecibida;
  }
}
