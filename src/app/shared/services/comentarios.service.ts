import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Comentario } from '../model/comentario';

@Injectable()
export class ComentariosService {
  private comentariosCollection: AngularFirestoreCollection<Comentario>;
  comentarios: Observable<Comentario[]>;
  constructor(private readonly afs: AngularFirestore) {
    this.comentariosCollection = afs.collection<Comentario>('comentarios');
    // .valueChanges() is simple. It just returns the 
    // JSON data without metadata. If you need the 
    // doc.id() in the value you must persist it your self
    // or use .snapshotChanges() instead. See the addItem()
    // method below for how to persist the id with
    // valueChanges()
    this.comentarios = this.comentariosCollection.valueChanges();
  }
  getComentarios(){
    return this.comentarios;
  }
}