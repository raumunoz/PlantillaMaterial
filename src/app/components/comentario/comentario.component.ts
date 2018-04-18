import { Comentario } from '../../shared/model/comentario';
import {Component, Input, Output, EventEmitter,OnInit} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {
  comentario:Comentario;
  icono:String;
  tituloNuevo:string;
  mensajeNuevo:string;
  @Input() titulo:string;
  @Input() fecha:string;
  @Input() mensaje:string
  @Input() likes:number;
  @Input() id:string;
  @Output() emisorComentario: EventEmitter<Comentario> = new EventEmitter<Comentario>(); //creating an output event
 // @Output() actualizar: EventEmitter<boolean> = new EventEmitter<boolean>(); //creating an output event
  editState:boolean=false;
  inputControl:FormControl = new FormControl('', [Validators.required, Validators.maxLength(15)]);
  mensajeControl:FormControl= new FormControl('', [Validators.required, Validators.maxLength(200)]);
  constructor() { 
    
    
  }

  ngOnInit() {
    //this.notify.emit("Hola desde el hijo");
    this.icono="edit mode";
  }

  emitirComentarioParaBorrar(event){
    //event ees el evento que se realizo es decir como clicks duracion y esas cosas
    
    this.comentario={id:this.id,
      titulo:this.titulo,
      fecha:this.fecha,
      mensaje:this.mensaje,
      likes:this.likes,
      actualizar:false}

    console.log("el comentario a enviarce es  "+this.comentario.titulo);
    console.log("el id es "+ this.id )
    this.emisorComentario.emit(this.comentario);

  }
  
  abrirSeccionEditar(event){
    
    if(this.editState){
      this.icono="edit mode";
    }else{
      this.icono="triangle";
      
    }
    this.editState= !this.editState;
    
    //this.emisorComentario.emit(this.comentario);
    
  }
  emitirParaActualizar(){
    
    console.log("titulo para actualizar "+this.tituloNuevo);
    console.log("Mensaje para actualizar "+this.mensajeNuevo);
    
    
      if((this.tituloNuevo != '') && (this.mensajeNuevo !='')){
        this.comentario={id:this.id,
          titulo:this.tituloNuevo,
          fecha:this.fecha,
          mensaje:this.mensajeNuevo,
          actualizar:true
          }
          console.log("a actualizar"+this.comentario.actualizar);
          this.emisorComentario.emit(this.comentario);

      }
      

  }
}
