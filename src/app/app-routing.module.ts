import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './productos/busqueda/busqueda.component';
import { RegistroComponent } from './usuarios/registro/registro.component';
import { ProductosDisponiblesComponent } from './productos/productos-disponibles/productos-disponibles.component';
import { PerfilComponent } from './usuarios/perfil/perfil.component';

const routes: Routes = [
  { path: "", redirectTo: "/busqueda-productos", pathMatch: "full" },
  { path: "busqueda-productos", component: BusquedaComponent },
  { path: "registro-usuarios", component: RegistroComponent },
  { path: "productos-disponibles", component: ProductosDisponiblesComponent },
  { path: "perfil-usuarios", component: PerfilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
