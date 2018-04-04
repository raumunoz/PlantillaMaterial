import { Logger } from "./logger.service";
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Request } from '@angular/http';
@Injectable()
export class Reloj {
    
  
    constructor(private _http: HttpClient){
      
    }
      
      
  
    horaActual() {
      return this._http.get("http://worldclockapi.com/api/json/est/now")
        .map(result => result);
  }
  }