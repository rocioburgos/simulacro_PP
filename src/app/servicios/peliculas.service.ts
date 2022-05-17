import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pelicula } from '../clases/pelicula';
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private itemsCollection: AngularFirestoreCollection<Pelicula>;
  private peliDoc: AngularFirestoreDocument<Pelicula>;
  private peli: Observable<Pelicula>;

  private resultadosCollection:AngularFirestoreCollection<any>;
  items: Observable<Pelicula[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Pelicula>('peliculas');
    this.items = this.itemsCollection.valueChanges();
  }

  addItem(item: Pelicula) {
   return this.itemsCollection.add(Object.assign({}, item));
  }

  peliculaFiltradaPorActor(data:string){ 

        return this.afs.collection('cats').doc(data).snapshotChanges();
  }

  

}
