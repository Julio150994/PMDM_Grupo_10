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
 

  constructor(private alertCtrl: AlertController,private http: HttpClient, private navCtrl: NavController, private usersService: UsersService,
    private loadingCtrl: LoadingController) {
  };

  ngOnInit() {
    console.log('Estás en la pestaña del usuario administrador');
    this.buttons = this.usersService.mostrarBotonesUsuario();
    this.obtenerUsuarios();
  }
  obtenerUsuarios() {
    return new Promise(res => {
      this.http.get(this.api+'/users', {
        headers: new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('token'))
      }).subscribe(data => {
        console.log(data);
        this.users = data;
        this.users=this.users.data;
        res(this.users);
      }, err => {
        console.log('Error al mostrar los usuarios '+err);
      });
    });
  }
  onLogout() {
    this.token = localStorage.getItem('token');

    this.eliminarToken = this.usersService.logout(this.token).then(data => {
      this.users = data;
      this.users=this.users.data;
    });

    this.navCtrl.navigateForward('/login-almagest');
    console.log('El administrador ha cerrado la sesión');
  }

  /** Métodos para gestionar usuarios */
  getUserActived(id:string) {
    const boton = document.getElementById(id);
    const txtActivar = 'Activar';
    const txtDesactivar = 'Desactivar';

    if (boton.innerHTML === txtActivar) {
      this.usersService.activar(id)
      .then(data => {
        this.users = data;
        this.users = this.users.data;
      },
      (error) => {
        console.log('Error al intentar desactivar: '+error);
      });

      boton.innerHTML = txtDesactivar;
      console.log('Usuario desactivado correctamente');
    }
    else if(boton.innerHTML === txtDesactivar) {
      this.usersService.desactivar(id)
      .then(data => {
        this.users = data;
        this.users = this.users.data;
      },
      (error => {
        console.log('Error al intentar activar: '+error);
      }));

      boton.innerHTML = txtActivar;
      console.log('Usuario activado correctamente');
    }

    /*if (this.buttons[0].nombre === txtDesactivar) {
      this.usersService.activar(id)
      .then(data => {
        this.users = data;
        this.users = this.users.data;
      },

      (error) => {
        console.log('Error al intentar desactivar: '+error);
      });
    }
    else if(this.buttons[0].nombre === txtActivar) {
      this.usersService.desactivar(id)
      .then(data => {
        this.users = data;
        this.users = this.users.data;
      },
      (error => {
        console.log('Error al intentar activar: '+error);
      }));
    }*/

    /*else {
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
    }*/
  }
  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      duration: 400
    });
    await loading.present();
  }

  onEditar(id) {
    this.usersService.obtenerIdUsuario(localStorage.getItem('token'),id)
    .then(data => {
      this.usuario = data;
      this.usuario = this.usuario.data;
    });
    this.navCtrl.navigateForward('/editar-usuario');
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
