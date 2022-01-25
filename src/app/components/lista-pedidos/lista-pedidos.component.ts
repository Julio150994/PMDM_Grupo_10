import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { IonInfiniteScroll, NavController } from '@ionic/angular';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.scss'],
})
export class ListaPedidosComponent implements OnInit {
  @ViewChild(IonInfiniteScroll, {static: true}) infiniteScroll: IonInfiniteScroll;
  @Input() pedidos: any;
  @Input() pedido: any;
  @Input() productos: any;
  @Input() orders: any;
  @Input() pedidosReales: any[] =[];

  constructor(private navCtrl: NavController, private usersService: UsersService) { }

  ngOnInit() {
    console.log('Componente de lista-pedidos');
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
        });
    });
  }

  slice: number=15
  cargarPedidos(event) {
    setTimeout(() => {
      this.slice += 20;
      event.target.complete();
      if (this.pedidosReales.length == this.pedidosReales.length) {
        event.target.disabled = true;
      }
    }, 400);

  }
}
