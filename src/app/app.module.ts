import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './/app-routing.module';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { DataService } from './shared/services/data.service';
import { UsersServiceService } from './shared/services/users-service.service';
import { Logger } from './shared/services/logger.service';
import { Reloj } from './shared/services/reloj.service';
import { FormsModule } from '@angular/forms';
import { TiempoComponent } from './components/tiempo/tiempo.component';
import { ClimaService } from './shared/services/clima.service';
import {InterceptorModule}from './shared/services/interceptor/interceptor.module';

@NgModule({
  declarations: [
    AppComponent,
    TarjetaComponent,
    ServicioComponent,
    TiempoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InterceptorModule,
    

  ],
  providers: [DataService,UsersServiceService,Logger,Reloj,ClimaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
