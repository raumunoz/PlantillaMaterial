import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { Gif } from '../http/gif';
import {Grid} from '../../shared/model/grid'
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})

export class HttpComponent implements OnInit {
  grid=new Grid(3,4);
  _respuesta: Gif;
  busqueda = "";
  api = "https://api.giphy.com/v1/gifs/search?api_key=33867c0d3d464777ae7815c397e9cab0&limit=5";
  url;
  exito: boolean;
  query = "&q=";
  colorBoton;
  contenidos:String[];
   color;
   arreglo;
   estilo;
  
  constructor(private httpClient: HttpClient) {

  }

  ngOnInit():void {
    this.exito = false;
    this.colorBoton="warn";
    this.contenidos=[
      'zero',
      'uno',
      'dos',
      'tres',
      'cuatro',
      
    ]
    /*for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        this.grid[i][j]=0;
        console.log(this.grid[i][j]);
      
      }
      
    }*/
    //this.arreglo=this.grid.generarArreglo2dDefault();
    console.log("El grid tienen de arreglo"+this.grid.agregarAgrid(0));
    this.estilo=this.grid.estiloAleatorio;
    
  }
  buscar(busqueda: string) {
    this.url = this.api + this.query + busqueda;
    this.busqueda = busqueda;
    this.httpClient.get<Gif>(this.url)
      .subscribe(data => {   // data is already a JSON object
       
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
        },
        () => {
          console.log("la subscribcion fue exitosa");
      }
      );

  }
  generadorEstilo(i){
    let styles = {
      /*'background-color': this.user.isExpired ? 'red' : 'transparent',
      'font-weight': this.isImportant ? 'bold' : 'normal'*/
      'color':'red'
    };
    if (i%2==0) {
      styles["color"]='red';
    }else{
      styles["color"]='blue';
    }
    return styles;
  }
  
  //la página jsonplaceholder simula un post a un serviocio REST el cual nos regresa la los datos que le mandamos
 /* req = this.httpClient.post('https://jsonplaceholder.typicode.com/posts', {
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
  )*/
  vistaGrid(){
    console.log("mostrar grid");
    this.color={
      'color':'warn',
      'background-color': 'lime',
      'font-size': '20px',
      'font-weight': 'bold'
      };
      this.colorBoton="primary";
  }
  elemento(i){
    console.log("elemento"+i);
  }
  claseAletoria(i){
    return "clase"+i;
  }
  setMyStyles() {
    let styles = {
      'background-color':  'red' ,
      'font-weight':  'bold' 
    };
    if(styles==undefined){
      return styles;
    }else{
      return this.grid.estiloAleatorio();
    }
    
  }

}
 





