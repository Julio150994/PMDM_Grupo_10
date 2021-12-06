import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-ion-card',
  templateUrl: './ion-card.component.html',
  styleUrls: ['./ion-card.component.scss'],
})
export class IonCardComponent implements OnInit {

  pedidos: any;

  constructor(private usersService: UsersService) { }

  ngOnInit() {}

  obtenerPedidos() {
    // En el servicio ya cogemos el id de la compañía del usuario
    this.usersService.obtenerPedidos()
    .then(pedidos => {
      console.log(pedidos);
      this.pedidos = pedidos;
      this.pedidos = this.pedidos.data;
    });
  }


  onIconoAlbaran() {
    console.log('Icono de Albarán');
  }

  onIconoFactura() {
    console.log('Icono de factura del Pedido.');
  }

}
