import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { UsersServiceService } from '../../shared/services/users-service.service';
@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {
  someProperty:string = '';
  arreglo:String='';
  //se tiene que inyectar los servicios
  user:string;
  editUser:string;
  constructor(private dataService:DataService,private usersServiceService:UsersServiceService ) {

  }

  ngOnInit() {
    console.log(this.dataService.cars);

    this.someProperty = this.dataService.myData();
    for(let carro of this.dataService.cars){
    this.arreglo=this.arreglo+carro+" ";
    this.usersServiceService.cast.subscribe(user=> this.user=user);/* se suscribe al observable y cada cambio se del observanle se guarda en el user local */

    }
  }
  editarUsuario(){
    this.usersServiceService.editUser(this.editUser);//el observable user se actualiza
  }

}
