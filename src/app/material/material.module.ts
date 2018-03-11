import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { ListaComponent } from './lista/lista.component';
import {FormsModule} from '@angular/forms';
import {MatCardModule,
        MatIconModule,
        MatToolbarModule
} from '@angular/material';
;
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule ,
    FormsModule,
    MatToolbarModule
  ],exports:[
    MatButtonModule,
    ListaComponent,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule
  ],
  declarations: [ListaComponent]
})
export class MaterialModule { }
