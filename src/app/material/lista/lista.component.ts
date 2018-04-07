import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';

import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  heroImageUrl = "../../../assets/ferras.jpeg";
  selectedHero: Hero;
  title="HOla";
  isUnchanged=true;
  username="RAu"
  isSpecial=true;
  color="red";
  imagen:String;
  imagenes:String[];
  indice:number;
  clase:string;
  stateFlag = false;//vandera para ver si se aplican las clases o no
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];
  getVal() {
    return 4;
  }
  cambiar(hero){
    hero.id++;
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    
  }
  
  myHero = this.heroes[0];

  constructor() { }

  ngOnInit() {
    this.indice=0;
    this.clase="rojo";
    this.imagenes=["../../../assets/carlos.jpg",
    "../../../assets/ferras.jpeg",
    "../../../assets/gato.jpg",
    "../../../assets/marisol.jpg",
    "../../../assets/profile-default-male.png",];
    this.imagen=this.imagenes[this.indice];
    this.indice++;
  }
  cambio(){
    this.isUnchanged=!this.isUnchanged;
    this.isSpecial=!this.isSpecial;
    this.colorAleatorio();
    
    if(this.indice<this.imagenes.length){
      
      this.imagen=this.imagenes[this.indice];
      this.indice++;
      console.log(this.indice);
      
      
    } else{
      this.indice=0;
      this.imagen=this.imagenes[ this.indice];
      this.indice++;
    }
  }
  colorAleatorio(){
    
    this.color="rgb("+this.Aleatorio255()+"," +this.Aleatorio255()+","+this.Aleatorio255()+")";
    //console.log(this.color);
    
  }
   Aleatorio255()
{
    return Math.floor(Math.random()*(255-1+1)+1);
}


//toglea la bandera
toggleState() {
    this.stateFlag = !this.stateFlag;
}

submit() {
    console.log('Button submitted');
}

calculateClasses() {
    return {
        btn: true,
        'btn-primary': true,
        'btn-extra-class': this.stateFlag//dependiendo del estado de la vandera la clase será aplicada o no
    };
}

}
