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
  id: number;
  usuario: any;
  constructor(private alertUserCtrl: AlertController,private httpUser: HttpClient,
    private loadingUserCtrl: LoadingController) {
 
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
        console.log('Error al mostrar los usuarios '+error);
      });
    });
  }

  obtenerIdUsuario(id: number) {
    return new Promise(res => {
      this.httpUser.get(this.url+'/user/'+id,{
        headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'))
      }).subscribe(data => {
        console.log(data);
        this.usuario = data;
        this.usuario = this.usuario.data;
        res(data);
      }, error => {
        console.log('No se ha podido obtener el id del usuario '+error);
      });
    });
  }

  activar(id:string) {
    return new Promise(async res => {
      this.loadUsers('Activando usuario...');
      setTimeout(() => {
        this.actived.dismiss();
        this.httpUser.post<any>(this.url+'/activate?user_id='+id,{
          headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token')),
        }).subscribe(async data => {
          console.log(data);
          window.location.reload();
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
          headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token')),
        }).subscribe(async data => {
          console.log(data);
          window.location.reload();
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

  async usuarioEditado(email:string) {
    const editado = await this.alertUserCtrl.create({
      header: 'Mensaje',
      cssClass: 'editCss',
      message: '<strong>Usuario '+email+' editado correctamente.</strong>',
      buttons: [
        {
          text: 'Aceptar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (update) => {
          }
        }
      ]
    });
    await editado.present();
  }

  editar(tok, id, firstname, secondname, email, password, compania) {
    return new Promise((res) => {
      this.httpUser.post<any>(this.url+'/user/updated/'+id+'&firstname='+firstname+
      '&secondname='+secondname+'&email='+email+'&password='+password+
      '&compania='+compania, {
        headers: new HttpHeaders().set('Authorization', 'Bearer '+tok)
      }).subscribe(data => {
          console.log(data);
          this.token = data;
          this.users = data;
          this.users = this.users.data;
          res(this.users);
          this.usuarioEditado(email);
        }, err => {
          console.log('Error al editar este usuario: '+err);
        });
      });
  }

  getElim(id) {
    return new Promise((resolve, reject) => {
      console.log(localStorage.getItem('token'));
          this.httpUser.post(this.url+'/user/deleted/'+id, {
            headers: new HttpHeaders().set('Authorization', 'Bearer '+(localStorage.getItem('token')))
          }).subscribe(res => {
            console.log(res);
            window.location.reload();
            resolve(res);
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

  obtenerCompanias() {
    return new Promise(res => {
      this.httpUser.get(this.url+'/companies').subscribe(data => {
        this.token = data;
        this.token=this.token.data;
        res(data);
      }, error => {
        console.log('Error al mostrar los usuarios '+error);
      });
    });
  }
}
