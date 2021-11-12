import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AlertController, LoadingController } from '@ionic/angular';
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
  actived: any;
  loadingDatas: any;
  constructor(private alertUserCtrl: AlertController,private httpUser: HttpClient,
    private loadingUserCtrl: LoadingController) {
 
  }

  login(mail, contrasenia) {
    console.log(mail);
    console.log(contrasenia);
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
        this.userNoRegistrado();
        console.log('Error este usuario no está registrado'+error);
      });
    });
  }

  /** Para mostrar mensaje de alerta de que no existe el usuario */
  async userNoRegistrado() {
    const notValid = await this.alertUserCtrl.create({
      header: 'LOGIN',
      cssClass: 'loginCss',
      message: '<strong>El correo electrónico no existe o la contraseña es errónea.</strong>',
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

  obtenerUsuarios(tok: any) {
    return new Promise(res => {
      this.httpUser.get(this.url+'/users',{
        headers: new HttpHeaders().set('Authorization', 'Bearer '+tok)
      }).subscribe(data => {
        this.token = data;
        this.token=this.token.data;
        res(data);
      }, error => {
        console.log('No se ha podido obtener el id del usuario '+error);
      });
    });
  }

  obtenerIdUsuario(tok: any, id: number) {
    return new Promise(res => {
      this.httpUser.get(this.url+'/user/'+id,{
        headers: new HttpHeaders().set('Authorization', 'Bearer '+tok)
      }).subscribe(data => {
        this.token = data;
        res(data);
      }, error => {
        console.log('No se ha podido obtener el id del usuario '+error);
      });
    });
  }

  activar(id:string) {
    return new Promise(async res => {
      this.loadUsers('Activando usuario...');
      this.httpUser.post<any>(this.url+'/activate?user_id='+id,{     
        headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'))
      }).subscribe(async data => {
        this.token = data;
        res(data);
      }, error => {
        this.loadingUserCtrl.dismiss();
        console.log('No se ha podido activar este usuario '+error);
      });
    });
  }

  desactivar(id:string) {
    return new Promise(res => {
      this.loadUsers('Desactivando usuario...');
      setTimeout(() => {
        this.actived.dismiss();
        this.httpUser.post<any>(this.url+'/deactivate?user_id='+id,{
          headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'))
        }).subscribe(data => {
          this.token = data;
          res(data);
        }, error => {
          this.loadingUserCtrl.dismiss();
          console.log('No se ha podido desactivar este usuario '+error);
        });
      }, 1750);
    });
  }

  async loadUsers(message: string) {
    this.actived = await this.loadingUserCtrl.create({
      message,
    });

    await this.actived.present();
  }

  editar(tok, id) {
    return new Promise(res => {
      this.httpUser.post<any>(this.url+'/user/updated/'+id,{
        headers: new HttpHeaders().set('Authorization', 'Bearer '+tok)
      }).subscribe(data => {
        this.token = data;
        res(data);
      }, error => {
        console.log('Error al editar usuario '+error);
      });
    });
  }

  getElim(id:string) {
    return new Promise((resolve, reject) => {
          this.httpUser.post(this.url+'/user/deleted/'+id, {
            headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'))
          }).subscribe(res => {
            resolve(res);
            console.log('ok');
          }, (err) => {
            reject(err);
          });
    });
  }
  eliminar(id: string) {
    return new Promise(res => {
      this.httpUser.post(this.url + '/user/deleted/' + id, {
        headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'))
      }).subscribe((data) => {
        this.token = data;
        res(data);
      }, error => {
        console.log('Error al eliminar usuario ' + this.token);
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
  existe(mail:string){
    let valido=false;
      return new Promise(res => {
        this.httpUser.get(this.url+'/users', {
          headers: new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('token'))
        }).subscribe(data => {
          this.users = data;
          this.users=this.users.data;
          for (let usuario = 0; usuario < this.users.length; usuario++) {
            valido=false;
            if(mail===this.users[usuario].email){
              valido=true;
              break;
            }
          }
          console.log(valido);
          res(valido); 
        }, err => {
          console.log('Error al obtener los usuarios '+err);
        });
        
      });
  }
}
