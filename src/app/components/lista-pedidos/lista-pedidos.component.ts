import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, LoadingController, AlertController, NavController } from '@ionic/angular';
import { UsersService } from '../../services/users.service';
import { ComponentePedido } from '../../interfaces/pedidos';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.scss'],
})
export class ListaPedidosComponent implements OnInit {
  @ViewChild(IonInfiniteScroll, {static: true}) loadOrders: IonInfiniteScroll;
  pedidos: any;
  pedido: any;
  compania: any;
  productos: any;
  orders: any;
  companies: any;
  pedidosReales: any[] = [];
  url = environment.almagestUrl;
  compas: any;
  componentsPedidos: ComponentePedido[] = [];


  constructor( loadingCtrl: LoadingController,private alertCtrl: AlertController,
    private navCtrl: NavController, private usersService: UsersService) { }

  ngOnInit() {
    console.log('Componente de pestaña lista de pedidos');
    this.obtenerPedidos();
  }

  obtenerPedidos() {
    this.usersService.obtenerProductos()
    .then(productos => {
        this.productos = productos;
        this.productos = this.productos.data;

        this.usersService.obtenerPedidos()
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
        });
    });
  }

  cargaPedidos(eventoPedido) {
    setTimeout(() => {
      // Cargamos los pedidos de nuevo
      const cargaPedidos = this.obtenerPedidos();

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
