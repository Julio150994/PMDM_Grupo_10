import { Component,ViewChild, OnInit } from '@angular/core';
import { IonInfiniteScroll,LoadingController, AlertController, NavController } from '@ionic/angular';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {
  @ViewChild(IonInfiniteScroll, {static: true}) loadOrders: IonInfiniteScroll;
  pedidos: any;
  pedido: any;
  productos: any;
  orders: any;
  pedidosReales: any[] = [];
  compas: any;

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

  cargaPedidos(eventoPedido) {
    setTimeout(() => {
      this.pedidosReales;
      eventoPedido.target.complete();
      return;
    }, 1350);
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
    this.usersService.obtenerProductos()
    .then(productos => {
        this.productos = productos;
        this.productos = this.productos.data;

        this.usersService.obtenerPedidosCompaniaUsuario()
        .then(data => {
          this.pedidos = data;
          this.pedidos = this.pedidos.data;
          this.orders = this.pedidos;

          console.log('Pedidos del usuario de la compañía mostrados:');
          for (let j = 0; j < this.orders?.length; j++) {
            if (this.orders[j].target_company_name === localStorage.getItem('name_comp')) {
              console.log(this.pedidosReales);
              this.pedidosReales.push(this.orders[j]);
            }
          }
        });
    });
  }
}
