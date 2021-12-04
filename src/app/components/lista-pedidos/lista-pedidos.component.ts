import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, LoadingController, AlertController, NavController } from '@ionic/angular';
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

  componentsPedidos: ComponentePedido[] = [];
  //componentsPedidos: Observable<ComponentePedido[]>;

  constructor( loadingCtrl: LoadingController,private alertCtrl: AlertController,
    private navCtrl: NavController, private usersService: UsersService) { }

  ngOnInit() {
    console.log('Componente lista de pedidos');
    this.obtenerPedidos();

    this.usersService.getComponentes().subscribe(data => {
      this.componentsPedidos = data;
    });
  }

  obtenerPedidos() {
    // En el servicio ya cogemos el id de la compañía del usuario
    this.usersService.obtenerPedidosUsuario()
    .then(pedidos => {
      console.log(pedidos);
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
      this.loadOrders.disabled = true;
      return;
    }, 1350);
  }


  onIconoAlbaran() {
    console.log('Icono de Albarán');
  }

  onIconoFactura() {
    console.log('Icono de factura del Pedido.');
  }

}
