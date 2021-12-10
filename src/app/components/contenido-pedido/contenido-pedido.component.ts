import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-contenido-pedido',
  templateUrl: './contenido-pedido.component.html',
  styleUrls: ['./contenido-pedido.component.scss'],
})
export class ContenidoPedidoComponent implements OnInit {
  @Input() pedidos: any;
  @Input() pedido: any;
  @Input() productos: any;
  @Input() orders: any;
  @Input() pedidosReales: any[] = [];
  @Input() numPedido: number;

  constructor() { }

  ngOnInit() {
    console.log('Componente de contenido-pedido');
  }

}
