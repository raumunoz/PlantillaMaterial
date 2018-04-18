import { Component, OnInit } from '@angular/core';
import { ComentarioComponent } from '../comentario/comentario.component';
import { ComentariosService } from '../../shared/services/comentarios.service';
import { Reloj } from '../../shared/services/reloj.service';
import { Comentario } from '../../shared/model/comentario';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';


@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  public nombre:string;
  public titulo:string;
  color = 'primary';
  mode = 'indeterminate';
  inputControl:FormControl = new FormControl('', [Validators.required, Validators.maxLength(15)]);
  textAreaControl:FormControl= new FormControl('', [Validators.required, Validators.maxLength(200)]);
  //inputControl = new FormControl('', [Validators.required, Validators.maxLength(15)]);

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
      console.log("la carga fue existops");
      
    },
    error=>{
      console.log("error");
    },
    ()=>{
      console.log("termino de cargar los comentarios");
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
   
    
  }

 
  
  
  
  recibirComentario=function (comentario:Comentario){
    //el titulo que envio el emisor no es un evento
   
    
    
    if(comentario.actualizar==false){
      this.titulo="elemento "+comentario.titulo +" Borrado";
      this.borrarComentario( comentario);
    }else{
      this.titulo="elemento "+comentario.titulo +" Actualizado";
      this.actualizarComentario(comentario);
    }
    
  }
  borrarComentario( comentario:Comentario){
    this.comentarioServicio.deleteComentario(comentario);
    }
  actualizarComentario(comentario:Comentario){
    this.comentarioServicio.updateComentario(comentario);
    }
  

}
