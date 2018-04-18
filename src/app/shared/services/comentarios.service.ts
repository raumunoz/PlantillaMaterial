import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Comentario } from '../model/comentario';


@Injectable()
export class ComentariosService {
  private comentariosCollection: AngularFirestoreCollection<Comentario>;
  comentarios: Observable<Comentario[]>;
  itemDoc:AngularFirestoreDocument<Comentario>;
  constructor(private readonly afs: AngularFirestore) {
    this.comentariosCollection = afs.collection<Comentario>('comentarios');
    
    //this.comentariosCollection = afs.collection<Comentario>('comentarios');
    // .valueChanges() is simple. It just returns the 
    // JSON data without metadata. If you need the 
    // doc.id() in the value you must persist it your self
    // or use .snapshotChanges() instead. See the addItem()
    // method below for how to persist the id with
    // valueChanges()
    //this.comentarios = this.comentariosCollection.valueChanges();
   /* this.comentarios=this.afs.collection("comentarios").snapshotChanges().map(changes =>{
      return changes.map(a=>{
        const data=a.payload.doc.data() as Comentario;
        data.id=a.payload.doc.id;
      });
    });*/
    this.comentariosCollection = afs.collection<Comentario>('comentarios');
    // .snapshotChanges() returns a DocumentChangeAction[], which contains
    // a lot of information about "what happened" with each change. If you want to
    // get the data and the id use the map operator.
    this.comentarios = this.comentariosCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Comentario;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
    
  }
  getComentarios(){
    return this.comentarios;
  }
  addComentario(comentario:Comentario){
    this.comentariosCollection.add(comentario);
  }
  deleteComentario(comentario:Comentario){
    this.itemDoc=this.afs.doc(`comentarios/${comentario.id}`);//template string
    this.itemDoc.delete();
  }
  updateComentario(comentario:Comentario){
    this.itemDoc=this.afs.doc(`comentarios/${comentario.id}`);//template string
    this.itemDoc.update(comentario);
  }
}