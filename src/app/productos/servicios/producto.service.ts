import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private URL: string = "https://royalpet-api.herokuapp.com/api/productos";
  constructor(private http: HttpClient) { }
  listarProductos(): Observable<any> {
    return this.http.get(this.URL)
  }
}
