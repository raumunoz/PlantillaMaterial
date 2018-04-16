import { Component, OnInit } from '@angular/core';
import { ComentarioComponent } from '../comentario/comentario.component';
import { ComentariosService } from '../../shared/services/comentarios.service';
import { Reloj } from '../../shared/services/reloj.service';
import { Comentario } from '../../shared/model/comentario';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  public nombre:string;
  public titulo:string;

  comentario:Comentario={
    titulo:'',
    mensaje:'',
    fecha:'',
    likes:0
  }
  comentarioVacio:Comentario={
    titulo:'',
    mensaje:'',
    fecha:'',
    likes:0
  }
  comentarios:Comentario[];
  constructor(public comentarioServicio:ComentariosService,private reloj: Reloj) {
    this.nombre="soy un componente";
  }
  
  
  ngOnInit() {
    
    this.comentarioServicio.getComentarios().subscribe(comentarios => {
      this.comentarios=comentarios;
      console.log(comentarios);
    }
  
    );
    this.titulo="";
    
  }
  agregarComentario(){
    
    if((this.comentario.titulo != '') && (this.comentario.mensaje !='')){
      this.comentario.fecha=this.reloj.horaActual();
      this.comentarioServicio.addComentario(this.comentario);
      this.comentario=this.comentarioVacio;
    }
  }
  checarcomentario(){
    console.log("datos a ingresar son "+ this.comentario.titulo);
    console.log("datos a ingresar son "+ this.comentario.mensaje);
    
  }

 
  
  
  
  recibirComentario=function (comentario:Comentario){
    //el titulo que envio el emisor no es un evento
   
    this.titulo="elemento "+comentario.titulo +" Borrado";
    this.borrarComentario( comentario);
  }
  borrarComentario( comentario:Comentario){
    this.comentarioServicio.deleteComentario(comentario);
    }
  

}
