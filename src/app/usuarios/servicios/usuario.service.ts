import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
//private URL:string = "http://localhost:3000/api/usuarios";
  constructor(private http:HttpClient) { }
  listarUsuario(txtCedula):Observable<any>{
return this.http.get('http://localhost:3000/api/usuarios?cedula='+txtCedula)
  }
}
