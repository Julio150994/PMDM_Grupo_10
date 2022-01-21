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
  productos: any;
  contadorArticulos: number;
  contArticulo = 0;
  catalogoEmpresaEmisora: any;
  catalogoEmpresaReceptora: any;
  catalogoPedido: any[]=[];
  cantidades: any[]=[];

  constructor(private navCtrl: NavController, private loadingCtrl: LoadingController,
    private pedidosService: PedidosService, private modalPedido: ModalController) { }

  async ngOnInit() {

    console.log('Modal para los pedidos.');

    this.catalogo1();

    this.catalogo2();

    console.log('Catalogo empresa emmisora');
    
    await this.presentLoading();

    console.log(this.catalogoEmpresaEmisora);

    console.log('Catalogo empresa emmisora');

    console.log('Catalogo empresa receptora');

    await this.presentLoading();

    console.log(this.catalogoEmpresaReceptora);

    console.log('Catalogo empresa receptora');

    for(let i = 0; i < this.catalogoEmpresaEmisora?.length; i++){
      for(let j = 0; j < this.catalogoEmpresaReceptora?.length; j++){
        if(this.catalogoEmpresaEmisora[i].article_id==this.catalogoEmpresaReceptora[j].article_id){
          this.catalogoPedido.push(this.catalogoEmpresaEmisora[i]);
        }
      }
    }
    
    console.log(this.catalogoPedido);

    for(let i = 0; i < this.catalogoPedido?.length; i++){
      this.cantidades.push([this.catalogoPedido[i],0]);
    }

    console.log(this.cantidades);
    
  }

  async catalogo1() {
    const loading = await this.loadingCtrl.create({
      duration: 10
    });
    this.pedidosService.obtenerCatalogo()
      .then(data => {
        this.catalogoEmpresaEmisora = data;
        this.catalogoEmpresaEmisora = this.catalogoEmpresaEmisora.data;
      }
    );
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }

  async catalogo2() {
    const loading = await this.loadingCtrl.create({
      duration: 10
    });
    this.pedidosService.obtenerCatalogo2()
      .then(data => {
        this.catalogoEmpresaReceptora = data;
        this.catalogoEmpresaReceptora = this.catalogoEmpresaReceptora.data;
      }
    );
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
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

  sumarProductos(cantidad:number,id:number) {
    console.log(cantidad);
    console.log(id);
    if(this.cantidades[id][1]>=0&&this.cantidades[id][1]<=39){
      this.cantidades[id][1]++;
    }
    
    console.log('SUMA Id de artículo: '+this.cantidades[id][1]);
  }

  restarProductos(cantidad:number,id:number) {
    console.log(cantidad);
    console.log(id);
    if(this.cantidades[id][1]>0&&this.cantidades[id][1]<=40){
      this.cantidades[id][1]--;
    }
    console.log('RESTA Id de artículo: '+this.cantidades[id][1]);
  }

  aniadirPedido() {
    console.log('Valor mostrado');
  }

}
