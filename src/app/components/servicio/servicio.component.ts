import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {
  someProperty:string = '';
  arreglo:String='';
  //se tiene que inyectar los servicios
  constructor(private dataService:DataService) {

  }

  ngOnInit() {
    console.log(this.dataService.cars);

    this.someProperty = this.dataService.myData();
    for(let carro of this.dataService.cars){
      this.arreglo=this.arreglo+carro+" ";
    }
  }

}
