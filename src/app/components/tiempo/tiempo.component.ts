import { Component, OnInit } from '@angular/core';
import { Reloj } from "../../shared/services/reloj.service";
import { ClimaService } from '../../shared/services/clima.service';
interface cut{
  currentDateTime:string,
  currentFileTime:string,
  dayOfTheWeek:string
  ordinalDate:string
  timeZoneName:string
  utcOffset:string;
}
import { Chart } from 'chart.js';
@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.css']
})

export class TiempoComponent implements OnInit {
 hora:String="23 4";
 respuesta:cut;
  constructor(private reloj: Reloj) { 

  }
 

  ngOnInit() {
    this.hora=this.reloj.horaActual();
    //console.log("la hora actual es "+this.reloj.horaActual());
    /*this.reloj.horaActual()
      .subscribe(res=>{
        this.respuesta = <cut>res;//un parseo para hacerlo del tipo de la interfaz
        console.log(this.respuesta.dayOfTheWeek);
        this.hora=this.respuesta.currentDateTime;
      })*/

  }

}
