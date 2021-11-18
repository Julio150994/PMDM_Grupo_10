import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabla-articulos',
  templateUrl: './tabla-articulos.page.html',
  styleUrls: ['./tabla-articulos.page.scss'],
})
export class TablaArticulosPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  onLogout() {
    this.navCtrl.navigateForward('/login-almagest');
    console.log('El usuario ha cerrado la sesión');
  }

}
