import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';
import { Producto } from '../modelo/producto';

@Component({
  selector: 'productos-disponibles',
  templateUrl: './productos-disponibles.component.html',
  styleUrls: ['./productos-disponibles.component.css']
})
export class ProductosDisponiblesComponent implements OnInit {
 productos : Producto[]=[]
  constructor(private srv:ProductoService) { }

  ngOnInit(): void {
    this.srv.listarProductos().subscribe(data=>{
this.productos = data
    })
  }

}
