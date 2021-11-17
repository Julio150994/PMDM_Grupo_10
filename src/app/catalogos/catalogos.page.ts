import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { NavController, LoadingController } from '@ionic/angular';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.page.html',
  styleUrls: ['./catalogos.page.scss'],
})
export class CatalogosPage implements OnInit {
  url= environment.almagestUrl;
  catalogo: any;
  id: any;

  constructor(private usersService: UsersService, private loadingUserCtrl: LoadingController,
    private navCtrl: NavController) { }

  async ngOnInit() {
    await this.presentLoading();
    console.log('página del usuario');
    this.id= await this.usersService.compania;
    this.usersService.obtenerCatalogo(this.id)
    .then(data => {
      this.catalogo = data;
      this.catalogo = this.catalogo.data;
    });
  }

  async presentLoading() {

    const loading = await this.loadingUserCtrl.create({
      message: 'Cargando usuario...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  onLogout() {
    this.navCtrl.navigateForward('/login-almagest');
    console.log('El usuario ha cerrado la sesión');
  }

  formAniadirArticulo() {
    console.log('Formulario añadir artículo');
    this.navCtrl.navigateForward('/aniadir-articulo');
  }

}
