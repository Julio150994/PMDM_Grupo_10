import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AlertController, LoadingController } from '@ionic/angular';
import { Operations } from '../interfaces/operaciones';

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
  id: number;
  usuario: any;
  constructor(private alertUserCtrl: AlertController,private httpUser: HttpClient,
    private loadingUserCtrl: LoadingController) {
 
  }

  mostrarBotonesUsuario() {
    return this.httpUser.get<Operations[]>('/assets/data/operaciones.json');
  }

  login(mail, contrasenia) {
    return new Promise(res => {
      this.httpUser.post<any>(this.url+'/login',{
        email: mail,
        password: contrasenia
      }).subscribe(data => {
        console.log(data);
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

  logout(tok: any) {
    return new Promise(res => {
      this.httpUser.post<any>(this.url+'/logout',{
        headers: new HttpHeaders().set('Authorization', 'Bearer '+tok)
      }).subscribe(data => {
        console.log(data);
        this.user = data;
        this.user=this.user.data;
        localStorage.removeItem(tok);// para eliminar el token de usuario y cerrar sesión
        res(data);
      }, error => {
        console.log('Error al cerrar sesión '+error);
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

  async presentLoading() {
    const loading = await this.loadingUserCtrl.create({
      message: 'Cargando...',
      duration: 1500
    });
  }

  obtenerIdUsuario(tok: string, id: number) {
    this.presentLoading();
    return new Promise(res => {
      this.httpUser.get(this.url+'/user/'+id,{
        headers: new HttpHeaders().set('Authorization', 'Bearer '+tok)
      }).subscribe(data => {
        console.log(data);
        this.usuario = data;
        this.usuario = this.usuario.data;

        /*console.log(this.usuario);

        console.log('Id: '+this.usuario.id);
        console.log('Firstname: '+this.usuario.firstname);
        console.log('Secondname: '+this.usuario.secondname);
        console.log('Email: '+this.usuario.email);
        console.log('Compañía: '+this.usuario.company_id);

        this.usuario = this.usuario.id;
        this.usuario = this.usuario.firstname;
        this.usuario = this.usuario.secondname;
        this.usuario = this.usuario.email;
        this.usuario = this.usuario.company_id;*/

        res(data);
        this.loadingUserCtrl.dismiss();
      }, error => {
        this.loadingUserCtrl.dismiss();
        console.log('No se ha podido obtener el id del usuario '+error);
      });
    });
  }

  /*async loadEditar(message: string) {
    const alert = await this.loadingUserCtrl.create({
      message,
      duration: 1000
    });

    await alert.present();

  }*/

  activar(id:string) {
    return new Promise(async res => {
      this.loadUsers('Activando usuario...');
      setTimeout(() => {
        this.actived.dismiss();
        this.httpUser.post<any>(this.url+'/activate?user_id='+id,{
          headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'))
        }).subscribe(async data => {
          console.log(data);
          this.token = data;
          res(data);
        }, error => {
          console.log('No se ha podido activar este usuario '+error);
        });
      }, 1750);
    });
  }

  desactivar(id:string) {
    return new Promise(async res => {
      this.loadUsers('Desactivando usuario...');
      setTimeout(() => {
        this.actived.dismiss();
        this.httpUser.post<any>(this.url+'/deactivate?user_id='+id,{
          headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'))
        }).subscribe(data => {
          this.token = data;
          res(data);
        }, error => {
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

  getElim(id) {
    return new Promise((resolve, reject) => {
      console.log(localStorage.getItem('token'));
          this.httpUser.post(this.url+'/user/deleted/'+id, {
            headers: new HttpHeaders().set('Authorization', 'Bearer '+(localStorage.getItem('token')))
          }).subscribe(res => {
            resolve(res);
            console.log('ok');
          }, (err) => {
            reject(err);
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
          res(valido); 
        }, err => {
          console.log('Error al obtener los usuarios '+err);
        });
        
      });
  }
}
