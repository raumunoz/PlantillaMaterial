import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../shared/model/estudiante';
import { ClassEstudiante } from '../../shared/model/class-estudiante';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {
  estudiantes:Estudiante[];

  estudiante2: Estudiante;
  estudiante1: ClassEstudiante;
  estudiante3: Estudiante;
  estudiante4: Estudiante;
  estudiante5: Estudiante;
 
  constructor() { }

  ngOnInit() {
    this.estudiante1=new ClassEstudiante(1,'chancho','jerez');
    console.log('Inicializando');
  console.log('Edad dek estudiante',this.estudiante1.getEdad());
    /*this.estudiante1={
      id:1,
      nombre:'Pepa PIG' ,
      ciudad:'Cochabamba'
    };*/
    this.estudiante2={
      id: 2,
      nombre: 'carols',
      ciudad: 'Madrid',
      foto:''
    };
    this.estudiante3={
      id: 3,
      nombre: 'Marisol',
      ciudad: 'Quito',
      foto:'../../assets/gato.jpg'
    };
    this.estudiante4={
      id: 4,
      nombre: 'ferras',
      ciudad: 'Lo PAgo',
      foto:'../../assets/ferras.jpeg'
    };
    this.estudiante5={
      id: 5,
      nombre: 'miua ',
      ciudad: 'china',
      foto:'../../assets/gato.jpg'
    };
    
    setTimeout(()=>{
      this.estudiante2={
        id:5,
        nombre:'waton',
        ciudad:'Santiago',
        //foto:'https://vignette.wikia.nocookie.net/uncyclopedia/images/9/94/Neckbeards.png/revision/latest?cb=20120715223321'
      }
    },3000);
    this.estudiantes=[
      this.estudiante2,
      this.estudiante3,
      this.estudiante4,
      this.estudiante5
    ];
  }
  onMouseClick($event:Estudiante){
    console.log('Click on: ', $event);
  }
  onClick(estudiante:Estudiante[]){
    console.log(estudiante);
  }
}
