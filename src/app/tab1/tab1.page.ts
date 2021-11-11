import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { NavController,AlertController } from '@ionic/angular';
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
 

  constructor(private alertController: AlertController,private http: HttpClient, private navCtrl: NavController, private usersService: UsersService) {
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
  async getUserActived(id) {
    const boton = document.getElementById('actived');
    const txtActivar = 'Activar';
    const txtDesactivar = 'Desactivar';
    if (this.buttons[0].nombre === txtDesactivar) {
      await this.usersService.desactivar(id)
      .then(data => {
        this.users = data;
        this.users = this.users.data;
      });

      boton.innerHTML = txtActivar;
      console.log('Usuario desactivado correctamente');
    }
    else {
      await this.usersService.activar(id)
      .then(data => {
        this.users = data;
        this.users = this.users.data;
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

  async eliminar(id) {
    const alert = await this.alertController.create({
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
            this.onEliminar(id);
          }
        }
      ]
    });

    await alert.present();
  }

  onEliminar(id) {
    this.navCtrl.navigateForward('/tabs/tab1');
    console.log('Eliminar usuario');
    this.usersService.eliminar(id)
    .then(data => {
      this.users = data;
      this.users = this.users.data;
    },
    (error) => {
      console.log('Error al intentar eliminar: '+error);
    });
  }

}

interface Operations {
  nombre: string;
  ruta: string;
  color: string;
  icono: string;
}