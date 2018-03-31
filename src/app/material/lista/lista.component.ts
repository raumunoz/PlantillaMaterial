import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  heroImageUrl = "https://vignette.wikia.nocookie.net/drawtolife/images/d/d5/H%C3%A9roe_2.png/revision/latest?cb=20110312100809&path-prefix=es";
  selectedHero: Hero;
  title="HOla";
  isUnchanged=true;
  username="RAu"
  isSpecial=true;
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
  }

}
