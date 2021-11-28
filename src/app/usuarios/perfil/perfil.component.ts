import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';
import { Usuario } from '../modelo/usuario';

@Component({
  selector: 'perfil-usuarios',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  txtCedula:number = 0
  nombre:string=""
usuario : Usuario[]=[]
  constructor(private srv:UsuarioService) { }

  ngOnInit(): void {
  }
listarUsuario(){
  this.srv.listarUsuario(this.txtCedula).subscribe(data=>{
this.usuario = data
  })
this.nombre = this.usuario.nombres
}


}
