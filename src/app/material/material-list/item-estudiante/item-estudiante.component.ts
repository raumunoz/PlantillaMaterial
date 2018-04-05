import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import { Estudiante } from '../../../shared/model/estudiante';


@Component({
  selector: 'app-item-estudiante',
  templateUrl: './item-estudiante.component.html',
  styleUrls: ['./item-estudiante.component.css']
})
export class ItemEstudianteComponent implements OnInit {
  readonly DEFAULT_PICTURE='../../assets/profile-default-male.png';
  
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
