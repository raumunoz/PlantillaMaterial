import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';//operador map
@Injectable()
export class ClimaService {

  constructor(private _http:HttpClient) {
    
   }
   /*dailyForecast(){
   return this._http.get("http://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22").subscribe
   (result => result); 
   }*/
  /*getProfile(){
    this.httpClient.get(`https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/?name=${this.name}`)
    .subscribe(
      (data:any[]) => {
        if(data.length) {
          this.age = data[0].age;
          this.found = true;
        }
      }
    )
  }*/
}
