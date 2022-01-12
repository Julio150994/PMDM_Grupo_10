import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { FormGroup } from '@angular/forms';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-crear-pedido',
  templateUrl: './crear-pedido.page.html',
  styleUrls: ['./crear-pedido.page.scss'],
})
export class CrearPedidoPage implements OnInit {
  url = environment.almagestUrl;
  orders: any;
  nombrePedido: '';

  constructor(private pedidosService: PedidosService) { }

  ngOnInit() {
    console.log('Formulario de crear pedido.');
  }

  aniadirPedido() {

  }

}
