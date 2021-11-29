import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';
import { Usuario } from '../modelo/usuario';

@Component({
  selector: 'perfil-usuarios',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  txtCedula: number = 0
  usuario: Usuario[] = []
  usuarioTemp: Usuario[] = []
  id= ""
  nombres: string = ""
  apellidos: string = ""
  correo_electronico: string = ""
  numero_celular: number = 0
  fecha_nacimiento: string = ""
  cedula: number = 0
  constructor(private srv: UsuarioService) { }

  ngOnInit(): void {
  }

  listarUsuario() {
    this.srv.listarUsuario(this.txtCedula).subscribe(data => {
      if (data.length) {
        this.usuarioTemp = data
        this.id= this.usuarioTemp[0]._id
        this.nombres = this.usuarioTemp[0].nombres
        this.apellidos = this.usuarioTemp[0].apellidos
        this.correo_electronico = this.usuarioTemp[0].correo_electronico
        this.numero_celular = this.usuarioTemp[0].numero_celular
        this.fecha_nacimiento = this.usuarioTemp[0].fecha_nacimiento
        this.cedula = this.usuarioTemp[0].cedula
      }
      this.usuario = data
    })
    console.log("Se ha cargado el cliente")
  }
  actualizarUsuario(){
    const usuario:Usuario ={
    _id: this.id,
    nombres: this.nombres,
    apellidos: this.apellidos,
    correo_electronico: this.correo_electronico,
    numero_celular: this.numero_celular,
    fecha_nacimiento: this.fecha_nacimiento,
    cedula: this.cedula
    }
    this.srv.actualizarUsuario(usuario).subscribe(data => {
console.log("Se ha actualizado el cliente")
    })
  }

}
