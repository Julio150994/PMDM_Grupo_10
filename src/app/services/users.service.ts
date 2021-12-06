import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AlertController, LoadingController } from '@ionic/angular';
import { ComponentePedido } from '../interfaces/pedidos';

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
  pedido: any;
  familias:any;
  name_comp: any;
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

  obtenerIdUsuario(id) {
    return new Promise(res => {
      this.httpUser.get(this.url+'/user/'+id,{
        headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'))
      }).subscribe(data => {
        console.log(data);
        this.usuario = data;
        this.usuario = this.usuario.data;
        this.compania=this.usuario.company_id;
        this.name_comp=this.usuario.company;
        localStorage.setItem('name_comp',this.name_comp)
        localStorage.setItem('id_comp',this.compania);
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

  getEncabezadoProductos() {
    return new Promise(res => {
      this.httpUser.post(this.url+'/products/company?id='+localStorage.getItem('id_comp'),{
        headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'))
      }).subscribe(data => {
        this.catalogo = data;
        this.catalogo=this.catalogo.data;
        res(data);
      }, error => {
        console.log('Error al mostrar el contador de artículos '+error);
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
      this.httpUser.post(this.url+'/products/company?id='+localStorage.getItem('id_comp'),{
    headers: new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('token'))
    }).subscribe(data => {
        console.log(data);
        this.producto = data;
        this.producto=this.producto.data;
        res(data);
      }, error => {
        console.log('Error al mostrar los productos '+error);
      });
    });
  }

  obtenerArticulos(tok: any) {
    return new Promise(res => {
      this.httpUser.get<any>(this.url+'/articles',{
        headers: new HttpHeaders().set('Authorization','Bearer '+tok)
      }).subscribe(data => {
        console.log(data);
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
      this.httpUser.get<any>(this.url+'/families').subscribe(data => {
        this.familias = data;
        this.familias=this.familias.data;
        res(data);
      }, error => {
        console.log('Error al mostrar los familias '+error);
      });
    });
  }

  addProduct(tok: any, article_id: number, company_id, price: number, familia: string) {
    return new Promise(res => {
      this.httpUser.post<any>(this.url+'/products?article_id='+article_id+'&company_id='+
        company_id+'&price='+price+'&family_id='+familia,{
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

  removeProduct(id) {
    return new Promise((resolve, reject) => {
      this.httpUser.delete(this.url+'/products/'+id, {
        headers: new HttpHeaders().set('Authorization', 'Bearer '+(localStorage.getItem('token')))
      }).subscribe(res => {
        console.log(res);
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  obtenerPedidos() {
    return new Promise(res => {
      this.httpUser.get(this.url+'/orders', {
        headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'))
      }).subscribe(data => {
        this.pedido = data;
        this.pedido = this.pedido.data;
        res(data);
      }, error => {
        console.log('Error al mostrar los pedidos '+error);
      });
    });
  }

  getComponentes() {
      return this.httpUser.get<ComponentePedido[]>('/assets/data/pedidos.json');
  }
}
