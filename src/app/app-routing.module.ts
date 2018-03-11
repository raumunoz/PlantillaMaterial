import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarjetaComponent }      from './tarjeta/tarjeta.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tarjeta',
    component: TarjetaComponent 
  }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule {}