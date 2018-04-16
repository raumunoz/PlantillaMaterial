import { Logger } from "./logger.service";
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Request } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Reloj {
    fecha:string;    
    fechaActual:Date;
    constructor(private _http: HttpClient){
      
    }
      
      
  
    horaActual() {
      this.fechaActual=new Date();
      this.fecha=this.fechaActual.getHours()+":"+this.fechaActual.getMinutes()+ "  "+this.fechaActual.toLocaleDateString();
      //this.fechaActual.getUTCDay().toLocaleString()+"/"+this.fechaActual.getUTCMonth()+ "/"+this.fechaActual.getUTCFullYear()+ "  "+this.fechaActual.getHours()+":"+this.fechaActual.getMinutes();
      console.log("La fecha actual es ",this.fecha);
     /* return this._http.get("http://worldclockapi.com/api/json/est/now")
        .map(result => result);*/
        return this.fecha;

  }
  }