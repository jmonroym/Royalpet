import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductosModule} from './productos/productos.module'
import {UsuariosModule} from './usuarios/usuarios.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductosModule,
    UsuariosModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
