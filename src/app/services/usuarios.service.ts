import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http_usuario: HttpClient) { }

  getUsuarios() {
    return this.http_usuario.get('');// obtenemos los datos de nuestra api rest
  }
}
