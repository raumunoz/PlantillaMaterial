import { Logger } from "./logger.service";
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Request } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class Reloj {
    
  
    constructor(private _http: HttpClient){
      
    }
      
      
  
    horaActual() {
      return this._http.get("https://worldclockapi.com/api/json/est/now")
        .map(result => result);
  }
  }