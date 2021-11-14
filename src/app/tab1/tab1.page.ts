import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { UsersService } from '../services/users.service';
import { Operations } from '../interfaces/operaciones';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  api = 'http://semillero.allsites.es/public/api';
  users: any;
  user: any;
  tok: any;
  token: any;
  id: number;
  email: string;
  password: string;
  actived: any; //carga del usuario activo
  buttons: Observable<Operations[]>;
  usuario: any;
  eliminarToken: any;
 

  constructor(private alertCtrl: AlertController,private http: HttpClient,
    private navCtrl: NavController, private usersService: UsersService, private loadingCtrl: LoadingController) {
  };

  ngOnInit() {
    this.token = localStorage.getItem('token');

    console.log('Estás en la pestaña del usuario administrador');
    this.buttons = this.usersService.mostrarBotonesUsuario();

    this.usersService.obtenerUsuarios(this.token).then(data => {
      console.log(data);
      this.users = data;
      this.users=this.users.data;
    });
  }

  onLogout() {
    this.navCtrl.navigateForward('/login-almagest');
    console.log('El administrador ha cerrado la sesión');
  }

  async getUserActived(id: string) {
    const boton = document.getElementById(id);
    const txtActivar = 'Activar';
    const txtDesactivar = 'Desactivar';
    this.token = localStorage.getItem('token');

    if (boton.innerHTML === txtActivar) {
      await this.presentLoading();
      this.usersService.activar(id);

      boton.innerHTML = txtDesactivar;
      console.log('Usuario activado correctamente');
      this.navCtrl.navigateForward('/tabs/tab1');
      this.obtenerUsuarios(this.token);
    }
    else {
      await this.presentLoading();
      this.usersService.desactivar(id);
      boton.innerHTML = txtActivar;
      console.log('Usuario desactivado correctamente');
      this.navCtrl.navigateForward('/tabs/tab1');
      this.obtenerUsuarios(this.token);
    }
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

  onEditar(id) {
    this.usersService.obtenerIdUsuario(localStorage.getItem('token'),id)
    .then(data => {
      this.usuario = data;
      this.usuario = this.usuario.data;
    });

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
          }
        }
      ]
    });

    await alert.present();
  }

}
