import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialButtonComponent } from './material-button/material-button.component';

import { ListaComponent } from './lista/lista.component';
import {FormsModule} from '@angular/forms';
import { MaterialDemoComponent } from './material-demo/material-demo.component';
import { MaterialInputComponent } from './material-input/material-input.component';



import {MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatCardModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { MaterialListComponent } from './material-list/material-list.component';
import { ItemEstudianteComponent } from './material-list/item-estudiante/item-estudiante.component';


import {NgForm} from '@angular/forms';


@NgModule({
  
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FormsModule
    

  ],
  exports:[
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    
    
    
  ],

  declarations: [MaterialDemoComponent,ListaComponent, MaterialButtonComponent, MaterialInputComponent, MaterialListComponent, ItemEstudianteComponent]
})
export class MaterialModule { }
