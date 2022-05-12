import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pais } from 'src/app/clases/pais';
import { PaisesService } from 'src/app/servicios/paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  paises: Pais[] = [];
  opcionSeleccionado: string = '';
  banderaElegida: string = '';
  @Output() onPaisElegido: EventEmitter<string> = new EventEmitter();
  constructor(private paisesSrv: PaisesService) { }

  ngOnInit(): void {
    this.paisesSrv.getAllCountries().subscribe((res) => {
      this.paises = res;

    });

  } 

  capturar() { 
    this.onPaisElegido.emit(this.opcionSeleccionado);
    console.log(this.opcionSeleccionado);
  }


}
