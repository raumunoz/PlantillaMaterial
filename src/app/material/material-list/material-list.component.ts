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
      foto:'https://i.enkirelations.com/qyPlHeWzU4ZSkQCWG92Lbagjbvc=/800x0//images/2017/04/106a857b4bfd8bac3eb570ef4563112b.jpg'
    };
    this.estudiante3={
      id: 3,
      nombre: 'Marisol',
      ciudad: 'Quito',
      foto:'http://en.arabwomanmag.com/wp-content/uploads/2016/03/Noora.Passport.Pic-Arab-Woman-Platform.jpg'
    };
    this.estudiante4={
      id: 4,
      nombre: 'ferras',
      ciudad: 'Lo PAgo',
      foto:'http://renegado.com.mx/images/stories/Blog/Ferras.jpg'
    };
    this.estudiante5={
      id: 5,
      nombre: 'miua ',
      ciudad: 'china',
      foto:'https://cdn.pixabay.com/photo/2014/04/02/10/42/kitties-304268_960_720.png'
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
}
