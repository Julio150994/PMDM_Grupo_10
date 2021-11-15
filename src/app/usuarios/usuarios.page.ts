import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  api = 'http://semillero.allsites.es/public/api';
  users: any;
  user: any;

  constructor(private navCtrl: NavController, private usersService: UsersService) { }

  ngOnInit() {
    console.log('Página de catálogo de productos');
  }

  onLogout() {
    this.navCtrl.navigateForward('/login-almagest');
    console.log('El usuario ha cerrado la sesión');
  }

}
