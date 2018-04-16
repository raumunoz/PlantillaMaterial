import { Component, OnInit } from '@angular/core';
import { ComentarioComponent } from '../comentario/comentario.component';
import { ComentariosService } from '../../shared/services/comentarios.service';
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
  constructor(public comentarioServicio:ComentariosService) {
    this.nombre="soy un componente"
  }
  
  
  ngOnInit() {
    
    this.comentarioServicio.getComentarios().subscribe(comentarios => {
      this.comentarios=comentarios;
      console.log(comentarios);
    }
  
    );
    this.titulo="sin titulo selecionado";
  }
  agregarComentario(){
    
    if((this.comentario.titulo != '') && (this.comentario.mensaje !='')){
      this.comentarioServicio.addComentario(this.comentario);
      this.comentario=this.comentarioVacio;
    }
  }
  checarcomentario(){
    console.log("datos a ingresar son "+ this.comentario.titulo);
    console.log("datos a ingresar son "+ this.comentario.mensaje);
    
  }

  borrarComentario(event, comentario){
//this.comentarioServicio.de
  }
  showPueblo(event):void{
		alert(event.nombre);
  }
  notify(){
    console.log("Recibí texto");
  }
  evento(event){
    console.log(event, " Recivido desde");
  }
  tituloHijo=function (titulo){
    this.titulo=titulo;
    
  }

}
