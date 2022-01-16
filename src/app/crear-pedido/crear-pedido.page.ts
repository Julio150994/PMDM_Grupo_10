import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { environment } from '../../environments/environment.prod';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-crear-pedido',
  templateUrl: './crear-pedido.page.html',
  styleUrls: ['./crear-pedido.page.scss'],
})
export class CrearPedidoPage implements OnInit {
  url = environment.almagestUrl;
  nombrePedido: '';
  empresas:any;
  constructor(private pedidosService: PedidosService,private loadingCtrl: LoadingController) { }
  

  ngOnInit() {
    this.pedidosService.obtenerCompanias();
    this.presentLoading();
    console.log('Formulario de crear pedido.');
    this.empresas=this.pedidosService.empresas;
    console.log(this.empresas);
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      duration: 1
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }

  aniadirPedido() {

  }

}
