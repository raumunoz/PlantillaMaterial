import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './/app-routing.module';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { DataService } from './shared/services/data.service';
import { UsersServiceService } from './shared/services/users-service.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    TarjetaComponent,
    ServicioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
   FormsModule

  ],
  providers: [DataService,UsersServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
