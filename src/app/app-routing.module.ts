import { NgModule, Component }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarjetaComponent }      from './tarjeta/tarjeta.component';
import { MaterialDemoComponent } from './material/material-demo/material-demo.component'
import { ListaComponent } from './material/lista/lista.component'
import { AppComponent } from './app.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { MaterialListComponent } from'./material/material-list/material-list.component';
import { RuterComponent }from'./components/ruter/ruter.component';
import { HeroesComponent }from'./components/heroes/heroes.component'
import { HttpComponent } from './components/http/http.component'
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  
  
  {
    path: 'tarjeta',
    component: TarjetaComponent 
  },
  {
    path: 'ruter',
    component:RuterComponent, 
      children:[
      {
        path: 'detalle/:name',
        component:HeroesComponent
      }
    ]},
  {
    path: 'material-demo',
    component: MaterialDemoComponent
  },
  
  {
    path: 'home',
    component: ListaComponent
  },
  {
    path: 'servicios',
    component: ServicioComponent
  },
  {
    path: 'http',
    component: HttpComponent
  },
  {
    path: 'comentarios',
    component: ComentariosComponent
    
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
 
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule {}