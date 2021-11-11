import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AlertController} from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = environment.almagestUrl;
  token: any;
  users: any;
  email: string;
  password: string;
  user: any;
  loadingDatas: any;
  constructor(private alertUserCtrl: AlertController,private httpUser: HttpClient) {

  }

  login(mail, contrasenia) {
    return new Promise(res => {
      this.httpUser.post<any>(this.url+'/login',{
        email: mail,
        password: contrasenia
      }).subscribe(data => {
        this.user = data;
        this.user=this.user.data;
        localStorage.setItem('token',this.user);
        res(data);
      }, error => {
        this.userNotFound();
        console.log('Error al loguearse con este usuario '+error);
      });
    });
  }

  /** Para mostrar mensaje de alerta de que no existe el usuario */
  async userNotFound() {
    const notValid = await this.alertUserCtrl.create({
      header: 'LOGIN',
      cssClass: 'loginCss',
      message: '<strong>El usuario no existe</strong>',
      buttons: [
        {
          text: 'Aceptar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (valid) => {
          }
        }
      ]
    });
    await notValid.present();
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

  activar(id) {
    var id=id;
    var headers = new HttpHeaders({
      "Accept": "application/json",
      'Authorization': 'Bearer '+localStorage.getItem('token')
    })
    return new Promise(res => {
      this.httpUser.post<any>(this.url+'/activate?user_id='+id,{ headers },{        
      }).subscribe(data => {
        this.token = data;
        res(data);
      }, error => {
        console.log('No se ha podido activar este usuario '+error);
      });
    });
  }

  desactivar(id) {
    return new Promise(res => {
      this.httpUser.post<any>(this.url+'/deactivate?user_id='+id,{
        headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token')),
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
      this.httpUser.post<any>(this.url+'/users/updated/'+id,{
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
