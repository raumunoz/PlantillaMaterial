import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruter',
  templateUrl: './ruter.component.html',
  styleUrls: ['./ruter.component.css']
})
export class RuterComponent implements OnInit {
  usuarios=[
    {name:'juan'},
    {name:'pepe'},
    {name:'maría'},
    {name:'josé'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
