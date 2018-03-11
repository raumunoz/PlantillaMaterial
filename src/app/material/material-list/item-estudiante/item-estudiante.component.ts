import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import { Estudiante } from '../../../shared/model/estudiante';


@Component({
  selector: 'app-item-estudiante',
  templateUrl: './item-estudiante.component.html',
  styleUrls: ['./item-estudiante.component.css']
})
export class ItemEstudianteComponent implements OnInit {
  readonly DEFAULT_PICTURE='http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png';
  
  @Input()
  estudiante:Estudiante;

  @Output()
  onMouseClick= new EventEmitter <Estudiante> ()

  constructor() { }

  ngOnInit() {
  }
  onClick(e: Estudiante){
    this.onMouseClick.emit(e);
  }

}
