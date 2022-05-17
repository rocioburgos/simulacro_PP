import { Actor } from "./actor";
import { eTipo } from "./eTipo";

export class Pelicula {

    id:number;
 Nombre:string; 
  tipo:eTipo;
 fechaEstreno:string;
  cantidadPublico:number;
  fotoPelicula:string;

  actor?:Actor;
  constructor(
      id:number, nombre:string, tipo:eTipo, fechaEstreno:string, 
    cantPublico:number, fotoPelicula:string ){
      this.id=id;
      this.Nombre= nombre;
      this.tipo= tipo;
      this.fechaEstreno= fechaEstreno;
      this.cantidadPublico= cantPublico;
      this.fotoPelicula= fotoPelicula;

  }
}
