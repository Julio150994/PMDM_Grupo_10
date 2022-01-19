import { Component, OnInit } from '@angular/core';
import { ModalController, NavController,LoadingController } from '@ionic/angular';
import { CrearPedidoPage } from '../crear-pedido/crear-pedido.page';
import { environment } from '../../environments/environment.prod';
import { PedidosService } from '../services/pedidos.service';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  url = environment.almagestUrl;
  productos: any;
  articulos: any;
  contadorArticulos: number;
  contArticulo = 0;

  constructor(private navCtrl: NavController, private loadingCtrl: LoadingController,
    private pedidosService: PedidosService, private modalPedido: ModalController) { }

  ngOnInit() {
    console.log('Modal para los pedidos.');

    this.pedidosService.obtenerCatalogo()
      .then(data => {
        this.productos = data;
        this.productos = this.productos.data;
      }
    );

    this.pedidosService.obtenerArticulosUsuario()
    .then(data => {
      console.log(data);
      this.articulos = data;
      this.articulos = this.articulos.data;
    });

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

  selectProductos(idArticulo) {
    console.log('Articulo seleccionado: '+idArticulo);
  }

  sumarProductos(idArticulo) {
    this.contArticulo += idArticulo;
    console.log('SUMA Id de artículo: '+this.contArticulo);
  }

  restarProductos(idArticulo) {
    this.contArticulo -= idArticulo;
    console.log('RESTA Id de artículo: '+this.contArticulo);
  }

  aniadirPedido() {
    console.log('Valor mostrado');
  }

}
