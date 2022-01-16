import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { CrearPedidoPage } from '../crear-pedido/crear-pedido.page';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  url = environment.almagestUrl;

  constructor(private navCtrl: NavController, private modalPedido: ModalController) { }

  ngOnInit() {
    console.log('Modal para los pedidos.');
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

}
