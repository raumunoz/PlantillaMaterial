import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class UsersServiceService {

  private user= new BehaviorSubject<string>('john');//usuario a compartir
  cast=this.user.asObservable();//transmite y puede ser monitoriado
  constructor() { }
  editUser(newUser){
    this.user.next(newUser);
  }
}
