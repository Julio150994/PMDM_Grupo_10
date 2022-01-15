import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { FormGroup } from '@angular/forms';
import { PedidosService } from '../services/pedidos.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-crear-pedido',
  templateUrl: './crear-pedido.page.html',
  styleUrls: ['./crear-pedido.page.scss'],
})
export class CrearPedidoPage implements OnInit {
  url = environment.almagestUrl;
  orders: any;
  nombrePedido: '';

  constructor(private pedidosService: PedidosService, private modalPedido: ModalController) { }

  ngOnInit() {
    console.log('Formulario de crear pedido.');
  }

  cancelar() {
    this.modalPedido.dismiss();
  }

  aniadirPedido() {}

}
