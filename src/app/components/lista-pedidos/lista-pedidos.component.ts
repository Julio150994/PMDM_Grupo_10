import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, NavController } from '@ionic/angular';
import { UsersService } from '../../services/users.service';
import { ComponentePedido } from '../../interfaces/pedidos';

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
  pedidosReales: any[] = [];
  compas: any;
  componentsPedidos: ComponentePedido[] = [];


  constructor(private navCtrl: NavController, private usersService: UsersService) { }

  ngOnInit() {
    console.log('Componente de pestaña lista de pedidos');
    this.obtenerPedidos();
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

          for (let j = 0; j < this.orders?.length; j++) {
            if (this.orders[j].target_company_name === localStorage.getItem('name_comp')) {
              console.log(this.pedidosReales);
              this.pedidosReales.push(this.orders[j]);
            }
          }
        });
    });
  }

  cargaPedidos(eventoPedido) {
    setTimeout(() => {
      // Cargamos los pedidos de la compañía de usuario nuevamente
      eventoPedido.target.complete();
      this.obtenerPedidos();
      return;
    }, 1350);
  }

  mostrarContenido() {
    this.navCtrl.navigateForward('/pedido');// mostramos el contenido del pedido (1 ó N productos)
  }

}
