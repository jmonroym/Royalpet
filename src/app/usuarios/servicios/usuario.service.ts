import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../modelo/usuario';
import { Usuarios } from '../modelo/usuarios';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  //private URL:string = "http://localhost:3000/api/usuarios";
  constructor(private http: HttpClient) { }
  listarUsuario(txtCedula: number): Observable<any> {
    return this.http.get('https://royalpet-api.herokuapp.com/api/usuarios?cedula=' + txtCedula)
  }
  actualizarUsuario(usuario: Usuario): Observable<any> {
    return this.http.put('https://royalpet-api.herokuapp.com/api/usuarios/' + usuario._id, usuario)
  }
  guardarUsuario(usuario: Usuarios): Observable<any> {
    return this.http.post('https://royalpet-api.herokuapp.com/api/usuarios/', usuario)
  }
  borrarUsuario(id: string): Observable<any> {
    return this.http.delete('https://royalpet-api.herokuapp.com/api/usuarios/' + id)
  }
}
