import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './/app-routing.module';
import { TarjetaComponent } from './tarjeta/tarjeta.component';




@NgModule({
  declarations: [
    AppComponent,
    TarjetaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
