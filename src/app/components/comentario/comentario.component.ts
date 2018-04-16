import { Comentario } from '../../shared/model/comentario';
import {Component, Input, Output, EventEmitter,OnInit} from '@angular/core'
@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {
  public nombre:string;
  @Input() titulo:string;
  @Input() fecha:string;
  @Input() mensaje:string
  @Input() likes:number;
  @Output() emisorTitulo: EventEmitter<String> = new EventEmitter<String>(); //creating an output event
  
  constructor() { 
    this.nombre = "Pueblo de la Toscana";
    
  }

  ngOnInit() {
    //this.notify.emit("Hola desde el hijo");
  }
  borrar(){
    console.log("Borrar");
    //this.notify.emit("Hola desde el hijo");
  }
  evento(event, by){
    this.emisorTitulo.emit(by);
  }
  
}
