import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { environment } from '../../environments/environment.prod';
import { PedidosService } from '../services/pedidos.service';
import { ModalController } from '@ionic/angular';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-crear-pedido',
  templateUrl: './crear-pedido.page.html',
  styleUrls: ['./crear-pedido.page.scss'],
})
export class CrearPedidoPage implements OnInit {
  url = environment.almagestUrl;
  nombrePedido: '';
  id: number;
  idCompania: number;
  empresas: any;
  empresaLogueada: any;
  empresaLog: number;
  empresasReales: any[]=[];
  opcionSeleccionado: string  = '0'; // Iniciamos
  verSeleccion: string        = '';

  constructor(private navCtrl: NavController, private pedidosService: PedidosService, private loadingCtrl: LoadingController,
      private modalPedido: ModalController, private usersService: UsersService) { }

  ngOnInit() {
    this.pedidosService.obtenerCompanias()
      .then(data => {
        this.empresas = data;
        this.empresas = this.empresas.data;

        for (let i = 0; i < this.empresas?.length; i++) {
          if (this.empresas[i].id != this.empresaLog) {
            this.empresasReales.push(this.empresas[i]);
          }
        }
      }
    );

    this.empresaLogueada = localStorage.getItem('id_comp');
    this.empresaLog = this.empresaLogueada;
    console.log('Empresa logueada: '+this.empresaLog);

    for(let i = 0;i < this.empresas?.length; i++) {
      console.log(this.empresas[i].id);
      if(this.empresas[i].id != this.empresaLog){
        this.empresasReales.push(this.empresas[i]);
      }
    }

    this.presentLoading();
    console.log('Formulario de crear pedido.');
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      duration: 0.5
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }

  capturar() {

    this.verSeleccion = this.opcionSeleccionado;
  }

  

  async abrirModal() {
    localStorage.setItem('empresaPedido',this.opcionSeleccionado);
    console.log('Empresa pedido: '+localStorage.getItem('empresaPedido'));
    this.navCtrl.navigateForward('/modal');
  }

  cancelarPedido() {
    this.navCtrl.navigateForward('/usuarios/pedidos');
  }

  aniadirPedido() {}

}
