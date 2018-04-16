import { Comentario } from '../../shared/model/comentario';
import {Component, Input, Output, EventEmitter,OnInit} from '@angular/core'
@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {
  comentario:Comentario;
  @Input() titulo:string;
  @Input() fecha:string;
  @Input() mensaje:string
  @Input() likes:number;
  @Input() id:string;
  @Output() emisorComentario: EventEmitter<Comentario> = new EventEmitter<Comentario>(); //creating an output event
  
  constructor() { 
    
    
  }

  ngOnInit() {
    //this.notify.emit("Hola desde el hijo");
  }

  emitirComentario(event){
    //event ees el evento que se realizo es decir como clicks duracion y esas cosas
    
    this.comentario={id:this.id,
      titulo:this.titulo,
      fecha:this.fecha,
      mensaje:this.mensaje,
      likes:this.likes}

    console.log("el comentario a enviarce es  "+this.comentario.titulo);
    console.log("el id es "+ this.id )
    this.emisorComentario.emit(this.comentario);
  }
  
  
}
