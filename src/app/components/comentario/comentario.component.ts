import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {
  
  @Input() titulo:string;
  @Input() fecha:string;
  @Input() mensaje:string
  @Input() likes:number;
  constructor() { }

  ngOnInit() {
    
    this.fecha="23/03/1990";
    this.mensaje="mensaje de prueba para ver un mensaje";
    this.likes=6;
  }

}
