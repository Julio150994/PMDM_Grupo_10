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
    console.log(this.pedidosReales);
    this.usersService.obtenerPedidosCompaniaUsuario()
    .then(data => {
      this.pedidos = data;
      this.pedidos = this.pedidos.data;
      this.orders = this.pedidos;

      for (let j = 0; j < this.orders?.length; j++) {
        if (this.orders[j].target_company_name === localStorage.getItem('name_comp')) {
          this.pedidosReales.push(this.orders[j]);
          console.log(this.pedidosReales);
        }
      }

      if(this.pedidosReales.length === 0) {
        document.getElementById("enca").innerHTML="No se han encontrado pedidos";
      }
      else{
        console.log(this.pedidosReales);
        document.getElementById("enca").style.display="none";
      }
    });

    console.log('Pestaña de mostrar pedidos.');
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
    this.usersService.obtenerProductos()
    .then(productos => {
        this.productos = productos;
        this.productos = this.productos.data;
        
    });
  }

  cargaPedidos(eventoPedido) {
    console.log('Cargando pedidos...');
    setTimeout(() => {
      eventoPedido.target.complete();
    }, 1350);
  }
}
