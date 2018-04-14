import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentariosComponent } from '../components/comentarios/comentarios.component';
import { MaterialModule } from'../material/material.module';
import { ComentarioComponent } from'../components/comentario/comentario.component';
import { ComentariosService } from'../shared/services/comentarios.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
    
  ],
  declarations: [ComentariosComponent,ComentarioComponent],
  providers:[ComentariosService]
})
export class ComentariosModule { }
