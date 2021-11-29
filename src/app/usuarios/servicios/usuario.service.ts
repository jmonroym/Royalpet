import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  //private URL:string = "http://localhost:3000/api/usuarios";
  constructor(private http: HttpClient) { }
  listarUsuario(txtCedula: number): Observable<any> {
    return this.http.get('https://backend-royalpet.glitch.me/api/usuarios?cedula=' + txtCedula)
  }
}
