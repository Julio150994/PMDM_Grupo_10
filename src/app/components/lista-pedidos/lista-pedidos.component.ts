import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { IonInfiniteScroll, NavController } from '@ionic/angular';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.scss'],
})
export class ListaPedidosComponent implements OnInit {
  @ViewChild(IonInfiniteScroll, {static: true}) loadOrders: IonInfiniteScroll;
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

  slice: number=2
  cargarPedidos(event) {
    console.log('hola');
    setTimeout(() => {
        this.usersService.obtenerPedidosCompaniaUsuario()
        .then(pedidos => {
            this.pedidos = pedidos;
            this.pedidos = this.pedidos.data;
        });
        for(let pedido of this.pedidos){
          console.log(pedido);
         this.pedidosReales.push(pedido);
       }
      this.slice += 1;
      event.target.complete();
    }, 200);
    
  }

}
