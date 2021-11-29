import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductosDisponiblesComponent } from './productos-disponibles/productos-disponibles.component';


@NgModule({
  declarations: [
    BusquedaComponent,
    ProductosDisponiblesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports: [
    BusquedaComponent,
    ProductosDisponiblesComponent,

  ]
})
export class ProductosModule { }
