import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, AlertController, LoadingController, IonList } from '@ionic/angular';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  @ViewChild('almagest', {static: true}) almagest: IonList;

  api = 'http://semillero.allsites.es/public/api';
  users: any;
  user: any;
  tok: any;
  token: any;
  id: number;
  email: string;
  password: string;
  actived: any;
  usuario: any;
  tokenEliminado: any;
  botonActivar: any;
  botonDesactivar: any;

  constructor(private alertCtrl: AlertController,private http: HttpClient,
    private navCtrl: NavController, private usersService: UsersService, private loadingCtrl: LoadingController) {
  };

  async ngOnInit() {
    this.token = localStorage.getItem('token');

    console.log('Estás en la pestaña del usuario administrador');

    this.usersService.obtenerUsuarios(this.token).then(data => {
      console.log(data);
      this.users = data;
      this.users=this.users.data;
    });
  }

  onLogout() {
    console.log('Token del administrador eliminado:\n'+localStorage.getItem('token'));
    localStorage.removeItem('token');

    this.loadLogoutAdmin('Cerrando sesión...');
  }

  async activar(id:string, email:string) {
    this.almagest.closeSlidingItems();
    this.token = localStorage.getItem('token');
    await this.usersService.activar(id);
    await this.presentLoading();
    console.log('Usuario activado correctamente');
    window.location.reload();
    this.alertUserActived(email);
  }
  
  async desactivar(id:string, email:string) {
    this.almagest.closeSlidingItems();
    this.token = localStorage.getItem('token');
    await this.usersService.desactivar(id);
    await this.presentLoading();
    console.log('Usuario desactivado correctamente');
    window.location.reload();
    this.alertUserDeactived(email);
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      duration: 400
    });
    await loading.present();
  }

  obtenerUsuarios(tok: any) {
    return new Promise(res => {
      this.http.get(this.api+'/users',{
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

  async onEditar(id) {
    this.usersService.obtenerIdUsuario(id)
    .then(data => {
      this.usuario = data;
      this.usuario = this.usuario.data;
    });

    this.almagest.closeSlidingItems();
    this.navCtrl.navigateForward('/editar-usuario');
  }

  async editLoading(message: string) {
    const loading = await this.loadingCtrl.create({
      message,
      duration: 3500,
    });

    await loading.present();
  }

  async eliminar(id: string) {
    this.almagest.closeSlidingItems();
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'ELIMINAR',
      message: '<strong>¿Estás seguro que deseas eliminar?</strong>',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('No has eliminado a este usuario');
          }
        }, {
          text: 'SI',
          handler: () => {
            this.usersService.getElim(id);
            console.log('Usuario eliminado éxitosamente');
            this.usuarioEliminado(id);
          }
        }
      ]
    });
    await alert.present();
  }

  async usuarioEliminado(id:string) {
    const eliminado = await this.alertCtrl.create({
      header: 'ELIMINADO',
      cssClass: 'removeCss',
      message: '<strong>Usuario con id '+id+' eliminado correctamente.</strong>',
      buttons: [
        {
          text: 'Aceptar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (remove) => {
          }
        }
      ]
    });
    await eliminado.present();
  }

  async alertUserActived(email:string) {
    const activado = await this.alertCtrl.create({
      header: 'Activado',
      cssClass: 'activedCss',
      message: '<strong>Usuario '+email+' activado correctamente.</strong>',
      buttons: [
        {
          text: 'Aceptar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (actived) => {
          }
        }
      ]
    });
    await activado.present();
  }

  async alertUserDeactived(email:string) {
    const activado = await this.alertCtrl.create({
      header: 'Desactivado',
      cssClass: 'activedCss',
      message: '<strong>Usuario '+email+' desactivado correctamente.</strong>',
      buttons: [
        {
          text: 'Aceptar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (deactived) => {
          }
        }
      ]
    });
    await activado.present();
  }

  async loadLogoutAdmin(message: string) {
    const loading = await this.loadingCtrl.create({
      message,
      duration: 850,
    });

    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    this.navCtrl.navigateForward('/login-almagest');
    this.alertLogoutAdmin();
  }

  async alertLogoutAdmin() {
    const logout = await this.alertCtrl.create({
      header: 'Logout',
      cssClass: 'logoutCss',
      message: '<strong>El usuario ha cerrado sesión correctamente.</strong>',
      buttons: [
        {
          text: 'Aceptar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (deactived) => {
          }
        }
      ]
    });
    await logout.present();
  }
}
