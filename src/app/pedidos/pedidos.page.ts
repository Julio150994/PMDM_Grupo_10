import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, AlertController, NavController, IonInfiniteScroll } from '@ionic/angular';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {
  @ViewChild(IonInfiniteScroll, {static: true}) loadOrders: IonInfiniteScroll;
  pedidos: any;

  constructor(private loadingCtrl: LoadingController,private alertCtrl: AlertController,
    private navCtrl: NavController, private usersService: UsersService) { }

  ngOnInit() {
    console.log('Pestaña de mostrar pedidos.');
    this.obtenerPedidos();
  }

  onLogout() {
    localStorage.removeItem('token');
    this.loadLogoutUser('Cerrando sesión...');
  }

  async loadLogoutUser(message: string) {
    const loading = await this.loadingCtrl.create({
      message,
      duration: 1,
    });

    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    this.navCtrl.navigateForward('/login-almagest');
    this.alertLogoutUser();
  }

  async alertLogoutUser() {
    const logout = await this.alertCtrl.create({
      header: 'Logout',
      cssClass: 'logoutCss',
      message: '<strong>El usuario ha cerrado sesión correctamente.</strong>',
      buttons: [
        {
          text: 'Aceptar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (deactived) => {
          }
        }
      ]
    });
    await logout.present();
  }

  obtenerPedidos() {
    // En el servicio ya cogemos el id de la compañía del usuario
    this.usersService.obtenerPedidosUsuario()
    .then(pedidos => {
      this.pedidos = pedidos;
      this.pedidos = this.pedidos.data;
    });
  }

  cargaPedidos(eventoPedido) {
    setTimeout(() => {
      // Cargamos los pedidos de nuevo
      const pedidos = this.obtenerPedidos();
      // this.data.push(pedidos);
      eventoPedido.target.complete();
      this.loadOrders.disabled= true;
      return;
    }, 1350);
  }

}
