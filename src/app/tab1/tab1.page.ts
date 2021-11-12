import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { UsersService } from '../services/users.service';

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
  buttons: Operations[] = [
    {
      nombre: 'Activar',
      ruta: '/tabs/tab1',
      color: 'success',
      icono: 'power-outline'
    },
    {
      nombre: 'Editar',
      ruta: '/editar-usuario',
      color: 'tertiary',
      icono: 'person-circle-outline'
    },
    {
      nombre: 'Eliminar',
      ruta: '/tabs/tab1',
      color: 'danger',
      icono: 'trash-outline'
    }
  ];
 

  constructor(private alertCtrl: AlertController,private http: HttpClient, private navCtrl: NavController, private usersService: UsersService,
    private loadingCtrl: LoadingController) {
  };

  ngOnInit() {
    console.log('Estás en la pestaña del usuario administrador');
    this.obtenerUsuarios();
  }
  obtenerUsuarios() {
    return new Promise(res => {
      this.http.get(this.api+'/users', {
        headers: new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('token'))
      }).subscribe(data => {
        this.users = data;
        this.users=this.users.data;
        res(this.users);
      }, err => {
        console.log('Error al mostrar los usuarios '+err);
      });
    });
  }
  onLogout() {
    this.navCtrl.navigateForward('/tabs/tab3');// hacia la página de login
    console.log('El administrador ha cerrado la sesión');
  }

  /** Métodos para gestionar usuarios */
  async getUserActived(id:string) {
    const boton = document.getElementById('actived');
    const txtActivar = 'Activar';
    const txtDesactivar = 'Desactivar';
    if (this.buttons[0].nombre === txtDesactivar) {
      await this.usersService.activar(id)
      .then(data => {
        this.loadingCtrl.dismiss();
        this.users = data;
        this.users = this.users.data;
      },
      (error) => {
        this.loadingCtrl.dismiss();
        console.log('Error al intentar desactivar: '+error);
      });

      boton.innerHTML = txtActivar;
    }
    else {
      await this.usersService.desactivar(id)
      .then(data => {
        this.loadingCtrl.dismiss();
        this.users = data;
        this.users = this.users.data;
      },
      (error) => {
        this.loadingCtrl.dismiss();
        console.log('Error al intentar activar: '+error);
      });

      this.buttons[0].nombre = txtDesactivar;
      console.log('Usuario activado correctamente');
    }
  }

  onEditar(id) {
    this.navCtrl.navigateForward('/editar-usuario');
    this.id=id;

    this.usersService.obtenerIdUsuario(localStorage.getItem('token'), this.id)
    .then(data => {
      this.user = data;
      this.user = this.users.data;
    });

    console.log('Formulario de editar usuario');
  }

  async eliminar(id:string) {
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
          }
        }, {
          text: 'SI',
          handler: () => {
            this.usersService.getElim(id);
          }
        }
      ]
    });

    await alert.present();
  }

}

interface Operations {
  nombre: string;
  ruta: string;
  color: string;
  icono: string;
}
