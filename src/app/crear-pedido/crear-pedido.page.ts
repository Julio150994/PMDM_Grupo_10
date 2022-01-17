import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { environment } from '../../environments/environment.prod';
import { PedidosService } from '../services/pedidos.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-crear-pedido',
  templateUrl: './crear-pedido.page.html',
  styleUrls: ['./crear-pedido.page.scss'],
})
export class CrearPedidoPage implements OnInit {
  url = environment.almagestUrl;
  nombrePedido: '';
  empresas: any;
  constructor(private navCtrl: NavController, private pedidosService: PedidosService, private loadingCtrl: LoadingController,
      private modalPedido: ModalController) { }

  ngOnInit() {
    this.pedidosService.obtenerCompanias()
      .then(data => {
        this.empresas = data;
        this.empresas = this.empresas.data;
      }
    );

    this.presentLoading();
    console.log('Formulario de crear pedido.');
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      duration: 1
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }

  abrirModal() {
    this.navCtrl.navigateForward('/modal');
  }

  cancelarPedido() {
    this.navCtrl.navigateForward('/usuarios/pedidos');
    //this.modalPedido.dismiss();
  }

  aniadirPedido() {}

}
