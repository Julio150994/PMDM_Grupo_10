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
  actived: any; //carga del usuario activo
  usuario: any;
  eliminarToken: any;
  botonActivar: any;
  botonDesactivar: any;


  constructor(private alertCtrl: AlertController,private http: HttpClient,
    private navCtrl: NavController, private usersService: UsersService, private loadingCtrl: LoadingController) {
  };

  ngOnInit() {
    this.token = localStorage.getItem('token');

    console.log('Estás en la pestaña del usuario administrador');

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

  async activar(id:string) {
    this.almagest.closeSlidingItems();
    this.token = localStorage.getItem('token');
    await this.usersService.activar(id);
    await this.presentLoading();
    window.location.reload();
    console.log('Usuario activado correctamente');
  }
  
  async desactivar(id:string) {
    this.almagest.closeSlidingItems();
    this.token = localStorage.getItem('token');
    await this.usersService.desactivar(id);
    await this.presentLoading();
    window.location.reload();
    console.log('Usuario activado correctamente');
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
    this.almagest.closeSlidingItems();
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
          }
        }
      ]
    });

    await alert.present();
  }

}
