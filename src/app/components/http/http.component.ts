import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { Gif } from '../http/gif';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})

export class HttpComponent implements OnInit {

  _respuesta: Gif;
  busqueda = "";
  api = "https://api.giphy.com/v1/gifs/search?api_key=33867c0d3d464777ae7815c397e9cab0";
  url;
  exito: boolean;
  query = "&q=";
  

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit():void {
    this.exito = false;
    
  }
  buscar(busqueda: string) {
    this.url = this.api + this.query + busqueda;
    this.busqueda = busqueda;
    this.httpClient.get<Gif>(this.url)
      .subscribe(data => {   // data is already a JSON object
        console.log(data);
        console.log("Mensaje " + data.meta.msg);
        console.log(data.data[0].images.original.url);
        this._respuesta = data;
        if (data.meta.msg == 'OK') {
          this.exito = true;
        }
      },
        (err: HttpErrorResponse) => {

          if (err.error instanceof Error) {
            console.log("Error de lado del cliente");

          } else {
            console.log("Error del lado del servidor");
          }
          console.log("un error ocurrio");
        }
      );

  }
  //la página jsonplaceholder simula un post a un serviocio REST el cual nos regresa la los datos que le mandamos
  req = this.httpClient.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'post',
    body: 'cuerpo',
    userId: 2,
    pizza:5
  }).subscribe(
    res => {
      console.log(res);
    },
    err => {
      console.log("Un error ocurrio");
    }
  )


}
 





