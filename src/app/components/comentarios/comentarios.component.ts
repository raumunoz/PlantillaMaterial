import { Component, OnInit } from '@angular/core';
import { ComentarioComponent } from '../comentario/comentario.component';
import { ComentariosService } from '../../shared/services/comentarios.service'
import { Comentario } from '../../shared/model/comentario'
@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
cadena:string;
  comentarios:Comentario[];
  constructor(public comentarioServicio:ComentariosService) {
   
  }
  
  
  ngOnInit() {
    this.cadena="nuevo titulo";
    this.comentarioServicio.getComentarios().subscribe(comentarios => {
      this.comentarios=comentarios;
      console.log(comentarios);
      
    }

    );
  }

}
