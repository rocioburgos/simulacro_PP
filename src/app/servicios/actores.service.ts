import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Actor } from '../clases/actor';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  private itemsCollection: AngularFirestoreCollection<Actor>;
  items: Observable<Actor[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Actor>('actores');
    this.items = this.itemsCollection.valueChanges();
  }

  addItem(item: Actor) {
   return this.itemsCollection.add(Object.assign({}, item));
  }

  getAll(){
    return this.itemsCollection.valueChanges({idField: "doc_id"});
  }


}
