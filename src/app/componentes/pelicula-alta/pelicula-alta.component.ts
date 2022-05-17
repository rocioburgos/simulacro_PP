import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { Actor } from 'src/app/clases/actor';
import { Pelicula } from 'src/app/clases/pelicula';

import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {

  registroOk:boolean;
  formulario: FormGroup;
  generoSeleccionado: string = '';
  generosPelicula = [{ nombre: 'terror' }, { nombre: 'comedia' }, { nombre: 'amor' }, { nombre: 'otros' }];
  uploadPercent: any;
  pathImagen: string;
  actores:Actor;
  constructor(private fb: FormBuilder, private storage: AngularFireStorage, private peliSrv:PeliculasService) {

    this.formulario = this.fb.group({
      nombre: ['', [
        Validators.required
      ]],
      fecha: ['', [
        Validators.required
      ]],
      cantidadExpectadores: ['', [
        Validators.required
      ]],
      generoSeleccionado: ['', [
        Validators.required
      ]],

      foto: [null, [
        Validators.required
      ]]
    });
  }

  ngOnInit(): void {

  }

  actorSeleciconado(actor:any){ 
    this.actores= actor;
  }

  onRegistroPelicula() {
    console.log(this.formulario);
    let id= Math.random();
    let peliculaNueva:Pelicula= new Pelicula(id, this.formulario.value['nombre'],
    this.formulario.value['fecha'],
    this.formulario.value['generoSeleccionado'], this.formulario.value['cantidadExpectadores'],
     this.pathImagen);
    peliculaNueva.actor= this.actores;
     console.log(peliculaNueva);
    this.peliSrv.addItem(peliculaNueva).then((res)=>{
      console.log(res.id) 
      if(res.id=='' || res.id== null){
        this.registroOk=false;
      }else{
        this.registroOk= true;
      }
    });;
    
  }





  async onUpload(foto: any) {
    console.log(foto.target.files[0]);

    //id unico
    const id: string = Math.random().toString(36).substring(2);
    const file = foto.target.files[0];
    const filePath = 'upload/' + id;
    const ref = this.storage.ref(filePath);

    const task = this.storage.upload(filePath, file);

    this.uploadPercent = task.percentageChanges();

    // upload image, save url
    await task;
    console.log('Image uploaded!');
    this.pathImagen = await ref.getDownloadURL().toPromise();
   // console.log("link imagen: " + this.pathImagen)
     
  }

}
