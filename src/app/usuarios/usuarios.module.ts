import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import {RouterModule, Routes} from '@angular/router';


@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports: [
    RegistroComponent,
    RouterModule
  ]
})
export class UsuariosModule { }
