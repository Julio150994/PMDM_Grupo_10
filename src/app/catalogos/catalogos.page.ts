import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.page.html',
  styleUrls: ['./catalogos.page.scss'],
})
export class CatalogosPage implements OnInit {
  api = 'http://semillero.allsites.es/public/api';
  users: any;
  user: any;

  constructor(private navCtrl: NavController, private usersService: UsersService) { }

  ngOnInit() {
    console.log('Pestaña de catálogo de productos');
  }

  onLogout() {
    this.navCtrl.navigateForward('/login-almagest');
    console.log('El usuario ha cerrado la sesión');
  }

}
