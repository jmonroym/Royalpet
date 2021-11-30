import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';
import { Usuarios} from '../modelo/usuarios';

@Component({
  selector: 'registro-usuarios',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private srv: UsuarioService) { }

  nombresp: string = ""
  apellidosp: string = ""
  correo_electronicop: string = ""
  numero_celularp: number = 0
  fecha_nacimientop: string = ""
  cedulap: number = 0
  ngOnInit(): void {
  }
guardarUsuario(){
  const usuario:Usuarios ={

  nombres: this.nombresp,
  apellidos: this.apellidosp,
  correo_electronico: this.correo_electronicop,
  numero_celular: this.numero_celularp,
  fecha_nacimiento: this.fecha_nacimientop,
  cedula: this.cedulap
  }
  this.srv.guardarUsuario(usuario).subscribe(data => {
    console.log("Usuario registrado")
  })
}


}
