import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = environment.almagestUrl;
  token: any;
  users: any;
  email: string;
  password: string;
  signIn: boolean;

  constructor(private httpUser: HttpClient) {
    this.signIn = false;
  }

  /** Para iniciar sesión con el admin */
  adminLogin() {
    return new Promise(res => {
      this.httpUser.post<any>(this.url+'/login',{
        email: 'raul@raul.com',
        password: '123456'
      }).subscribe(data => {
        this.token = data;
        res(data);
      }, error => {
        console.log('Error al loguearse con este usuario '+error);
      });
    });
  }

  login(mail, contrasenia) {
    return new Promise(res => {
      this.httpUser.post<any>(this.url+'/login',{
        email: mail,
        password: contrasenia
      }).subscribe(data => {
        this.token = data;
        res(data);
      }, error => {
        console.log('Error al loguearse con este usuario '+error);
      });
    });
  }

  /*registrar(tok: any, firstname: string, secondname: string, mail: string,
    contrasenia: string, confirmada: string, companyId: number, type: string) {
    console.log('Token obtenido en servicio: '+tok);

    return new Promise((res) => {
      this.httpUser.post<any>(this.url+'/register', {
        headers: new HttpHeaders().set('Authorization','Bearer '+tok),
        nombre: firstname,
        apellido: secondname,
        email: mail,
        password: contrasenia,
        confirmacion: confirmada,
        compania: companyId,
        tipo: type
      })
      .subscribe(datoUsuario => {
        this.token = datoUsuario;
        res(this.token);
        console.log('User register successfully.');
      }, error => {
        console.log('Error al registrar este usuario '+error);
      });
    });
  }*/

  obtenerUsuarios(tok: any) {
    //console.log('Token obtenido: '+tok);
    return new Promise(res => {
      this.httpUser.get(this.url+'/users', {
        headers: new HttpHeaders().set('Authorization','Bearer '+tok)
      }).subscribe(data => {
        this.token = data;
        res(data);
        console.log(data);
      }, err => {
        console.log('Error al mostrar los usuarios '+err);
      });
    });
  }
  obtenerIdUsuario(tok: any, id: number) {
    return new Promise(res => {
      this.httpUser.get(this.url+'/user/{'+id+'}',{
        headers: new HttpHeaders().set('Authorization', 'Bearer '+tok)
      }).subscribe(data => {
        this.token = data;
        res(data);
      }, error => {
        console.log('No se ha podido obtener el id del usuario '+error);
      });
    });
  }

  activar(tok: any) {
    return new Promise(res => {
      this.httpUser.post<any>(this.url+'/activate',{
        headers: new HttpHeaders().set('Authorization', 'Bearer '+tok),
        actived: 1
      }).subscribe(data => {
        this.token = data;
        res(data);
      }, error => {
        console.log('No se ha podido activar este usuario '+error);
      });
    });
  }

  desactivar(tok: any) {
    return new Promise(res => {
      this.httpUser.post<any>(this.url+'/deactivate',{
        headers: new HttpHeaders().set('Authorization', 'Bearer '+tok),
        actived: 0
      }).subscribe(data => {
        this.token = data;
        res(data);
      }, error => {
        console.log('No se ha podido desactivar este usuario '+error);
      });
    });
  }

  editar(tok, id) {
    return new Promise(res => {
      this.httpUser.post<any>(this.url+'/users/updated/{'+id+'}',{
        headers: new HttpHeaders().set('Authorization', 'Bearer '+tok)
      }).subscribe(data => {
        this.token = data;
        res(data);
      }, error => {
        console.log('Error al editar usuario '+error);
      });
    });
  }
  eliminar(token, id) {
    return new Promise(res => {
      this.httpUser.post<any>(this.url+'/users/deleted/{'+id+'}',{
        headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
      }).subscribe(data => {
        this.token = data;
        res(data);
      }, err => {
        console.log('Error al eliminar usuario '+err);
      });
    });
  }
  mostrarCompanias() {
    return new Promise(res => {
      this.httpUser.get(this.url+'/companies')
      .subscribe(companias => {
        res(companias);
      }, error => {
        console.log('Error al mostrar las compañías '+error);
      });
    });
  }
}
