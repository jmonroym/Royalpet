import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http',
import { Observable } from 'rxjs',
import { Usuario } from '../modelo/usuario'
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }

actualizarUsuario(usuario:Usuario):Obervable<any>{
return this.http.put("http://localhost:3000/api/usuarios/"+usuario._id, usuario)
}

}
