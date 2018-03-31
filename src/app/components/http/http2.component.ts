import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgIf } from '@angular/common';

interface UserResponse{
    login:string,
    bio:string;
    company:string
  }
  @Component({
    selector: 'app-http2',
    template: `
      <h1>{{title}}</h1>
      <h2>My favorite hero is: {{myHero}}</h2>
     
      `
  })
export class Http2Component implements OnInit {
    datos:UserResponse;
    items = {
        datos: [
            'First', 'Second', 'Third'
        ]
    }
    title = 'nada por mostrar';
    myHero = 'RAu';
    constructor(private httpClient: HttpClient) {
       

    }
    ngOnInit():void {
        
        /*this.httpClient.get<UserResponse>('https://api.github.com/users/raumunoz').subscribe(
          data=>{
            
            console.log("USer "+data.login);
            console.log("Bio "+data.bio);
            console.log("Company "+data.company);
          },
          (err:HttpErrorResponse)=>{
            if(err.error instanceof Error){
              console.log("Error del lado del cliente");
            }else{
            console.log("Error del lado del Servidor");
          }
        }
        )*/
      }
}
