import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import {RouterModule, Routes} from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';


@NgModule({
  declarations: [
    RegistroComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports: [
    RegistroComponent,
    PerfilComponent,
    RouterModule
  ]
})
export class UsuariosModule { }
