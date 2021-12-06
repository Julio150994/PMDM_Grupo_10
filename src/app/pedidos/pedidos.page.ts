import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, AlertController, NavController, IonInfiniteScroll } from '@ionic/angular';
import { UsersService } from '../services/users.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {
  @ViewChild(IonInfiniteScroll, {static: true}) loadOrders: IonInfiniteScroll;
  pedidos: any;
  pedido: any;
  compania: any;
  productos: any;
  orders: any;
  companies: any;
  pedidosReales: any[] = [];
  url = environment.almagestUrl;

  constructor(private loadingCtrl: LoadingController,private alertCtrl: AlertController,
    private navCtrl: NavController, private usersService: UsersService,
    private http: HttpClient) { }

  ngOnInit() {
    console.log('Pestaña de mostrar pedidos.');
    this.getPedidos();
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

  getPedidos() {
    this.usersService.obtenerProductos()
    .then(productos => {
        this.productos = productos;
        this.productos = this.productos.data;

        this.usersService.obtenerPedidosUsuario()
        .then(data => {
          console.log(data);
          this.pedidos = data;
          this.pedidos = this.pedidos.data;
          this.orders = this.pedidos;

          for (let i = 0; i < this.companies?.length; i++) {
            this.compania = false;
            for (let j = 0; j < this.orders?.length; j++) {
              if (this.orders[j].target_company_id === this.companies[i].id) {
                this.compania = true;
                break;
              }
            }
            if (!this.compania) {
              this.pedidosReales.push(this.companies[i]);
            }
          }
        });
    });
  }

  cargaPedidos(eventoPedido) {
    setTimeout(() => {
      // Cargamos los pedidos de nuevo
      const cargaPedidos = this.getPedidos();

      // this.data.push(pedidos);
      eventoPedido.target.complete();
      this.loadOrders.disabled= true;
      return;
    }, 1350);
  }

  onIconoAlbaran() {
    console.log('Icono de Albarán');
  }

  onIconoFactura() {
    console.log('Icono de factura del Pedido.');
  }

  mostrarContenido() {
    this.navCtrl.navigateForward('/pedido');// mostramos el contenido del pedido (1 ó N productos)
  }

}
