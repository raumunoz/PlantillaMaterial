import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  name:any;
  sub:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.sub=this.route.params.subscribe(params =>{
      this.name=params['name'];
    }

    )
  }

}
