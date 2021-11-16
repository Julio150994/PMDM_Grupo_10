import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-usuarios',
  templateUrl: 'usuarios.page.html',
  styleUrls: ['usuarios.page.scss'],
})
export class UsuariosPage {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    console.log('página del usuario')
  }
  onLogout() {
    this.navCtrl.navigateForward('/login-almagest');
    console.log('El usuario ha cerrado la sesión');
  }

}
