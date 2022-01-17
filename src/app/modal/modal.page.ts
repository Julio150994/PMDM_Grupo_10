import { Component, OnInit } from '@angular/core';
import { ModalController, NavController,LoadingController } from '@ionic/angular';
import { CrearPedidoPage } from '../crear-pedido/crear-pedido.page';
import { environment } from '../../environments/environment.prod';
import { PedidosService } from '../services/pedidos.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  url = environment.almagestUrl;
  productos:any
  idPproducto: number;
  constructor(private navCtrl: NavController, private loadingCtrl: LoadingController, private pedidosService: PedidosService, private modalPedido: ModalController) { }

  ngOnInit() {
    console.log('Modal para los pedidos.');
    this.pedidosService.obtenerCatalogo()
      .then(data => {
        this.productos = data;
        this.productos = this.productos.data;
      }
    );
    this.presentLoading();
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      duration: 1
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }

  async formPedidos() {
    const pedido = await this.modalPedido.create({
        component: CrearPedidoPage,
        componentProps: {
          num: 2,
          issueDate: '15/01/2022',
          originCompanyId: 3,
          targetCompanyId: 2,
        }
    });
    await pedido.present();

    const { data } = await pedido.onDidDismiss();
    console.log('Devolvemos el formulario de crear pedido.', data);
  }


  backToFormPedidos() {
    this.navCtrl.navigateForward('/usuarios/pedidos');
  }

  select(idProducto) {
   
  }

}
