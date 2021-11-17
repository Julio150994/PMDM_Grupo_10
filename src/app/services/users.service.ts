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
  catalogo: any;
  compania: any;
  producto: any;

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
        this.compania=this.usuario.company_id;
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

  editar(tok:any, id:string, firstname:string, secondname:string, email:string, password:string, compania:number) {
    return new Promise((res) => {
      this.httpUser.post<any>(this.url+'/user/updated/'+id+'?firstname='+firstname+
      '&secondname='+secondname+'&email='+email+'&password='+password+
      '&company_id='+compania, {
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

  obtenerCatalogo(id: any) {
    return new Promise(res => {
      this.httpUser.post(this.url+'/products/company?id='+id,{
        headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'))
      }).subscribe(data => {
        console.log(data);
        this.catalogo = data;
        this.catalogo=this.catalogo.data;
        res(data);
      }, error => {
        console.log('Error al mostrar el catálogo de la compañia '+error);
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

  obtenerProductos() {
    return new Promise(res => {
      this.httpUser.get(this.url+'/products').subscribe(data => {
        this.token = data;
        this.token=this.token.data;
        res(data);
      }, error => {
        console.log('Error al mostrar los productos '+error);
      });
    });
  }

  obtenerArticulos() {
    return new Promise(res => {
      this.httpUser.get(this.url+'/articles',{
        headers: new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('token'))
      }).subscribe(data => {
        this.token = data;
        this.token=this.token.data;
        res(data);
      }, error => {
        console.log('Error al mostrar los artículos '+error);
      });
    });
  }

  obtenerFamilias() {
    return new Promise(res => {
      this.httpUser.get(this.url+'/families').subscribe(data => {
        this.token = data;
        this.token=this.token.data;
        res(data);
      }, error => {
        console.log('Error al mostrar los familias '+error);
      });
    });
  }

  addProduct(tok: any, article_id: number, company_id: number, price: number, family_id: number) {
    return new Promise(res => {
      this.httpUser.post<any>(this.url+'/products?article_id='+article_id+'&company_id='+
        company_id+'&price='+price+'&family_id='+family_id,{
          headers: new HttpHeaders().set('Authorization','Bearer '+tok)
        }).subscribe(datoProducto => {
            console.log(datoProducto);
            this.producto = datoProducto;
            res(this.producto);
            console.log('Producto añadido correctamente');
        }, error => {
          console.log('Error al añadir este producto. '+error);
        });
    });
  }
}
