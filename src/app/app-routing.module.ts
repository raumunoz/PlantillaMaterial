import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarjetaComponent }      from './tarjeta/tarjeta.component';
import { MaterialDemoComponent } from './material/material-demo/material-demo.component'
import { ListaComponent } from './material/lista/lista.component'
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
  },
  {
    path: 'material-demo',
    component: MaterialDemoComponent
  },
  
  {
    path: 'home',
    component: ListaComponent
  }

];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule {}