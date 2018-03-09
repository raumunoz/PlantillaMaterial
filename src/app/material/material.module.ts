import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule 
  ],exports:[
    MatButtonModule,
    ListaComponent
  ],
  declarations: [ListaComponent]
})
export class MaterialModule { }
