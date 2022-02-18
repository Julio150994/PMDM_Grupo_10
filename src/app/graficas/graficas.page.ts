import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
import {  ChartType, ChartDataset, } from 'chart.js';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.page.html',
  styleUrls: ['./graficas.page.scss'],
})
export class GraficasPage implements OnInit {

  productos:any;
  mesSeis: number=0;
  mesCinco: number=0;
  mesTres: number=0;
  mesCuatro: number=0;
  mesUno: number=0;
  mesDos: number=0;
  datosGrafica: number[]=[];
  datosPedidos: any;
  idArticulo: number;
  cantidadesArticulo: number=0;

  public lineChartType: ChartType = 'bar';
  public lineChartData: ChartDataset[] = [];
  lineChartLabels: string[];
  
  constructor(private alertCtrl: AlertController, private navCtrl: NavController,
    private loadingCtrl: LoadingController,private pedidos:PedidosService) { }


  ngOnInit() {
    console.log('Pestaña de las gráficas');

    this.loadProducts();
    this.loadDatosPedidos();
  }
  onLogout() {
    localStorage.removeItem('token');

    this.loadLogoutUser('Cerrando sesión...');
    
  }

  async loadProducts() {
    const loading = await this.loadingCtrl.create({
      duration: 850,
    });
    this.pedidos.obtenerCatalogo().then(data => {
      this.productos = data;
      this.productos = this.productos.data;
    });

    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  async loadDatosPedidos() {
    const loading = await this.loadingCtrl.create({
      duration: 850,
    });
    this.pedidos.obtenerDatosPedidos().then(data => {
      this.datosPedidos = data;
      this.datosPedidos = this.datosPedidos.data;
      console.log(this.datosPedidos);
    });

    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  calcularCantidades(event){

    let date = new Date();

    let inicioMes5= new Date();
    inicioMes5.setDate(1);
    inicioMes5.setMonth(date.getMonth() - 6);
    inicioMes5.setUTCHours(-2,0,0,0);

    let finalMes5= new Date();
    finalMes5.setMonth(date.getMonth() - 6);
    finalMes5.setDate(31);
    finalMes5.setUTCHours(-2,0,0,0);
  
    let inicioMes4= new Date();
    inicioMes4.setDate(1);
    inicioMes4.setMonth(date.getMonth() - 5);
    inicioMes4.setUTCHours(-2,0,0,0);

    let finalMes4= new Date();
    finalMes4.setMonth(date.getMonth() - 5);
    finalMes4.setDate(30);
    finalMes4.setUTCHours(-2,0,0,0);

    let inicioMes3= new Date();
    inicioMes3.setDate(1);
    inicioMes3.setMonth(date.getMonth() - 4);
    inicioMes3.setUTCHours(-2,0,0,0);

    let finalMes3= new Date();
    finalMes3.setMonth(date.getMonth() - 4);
    finalMes3.setDate(31);
    finalMes3.setUTCHours(-2,0,0,0);

    let inicioMes2= new Date();
    inicioMes2.setDate(1);
    inicioMes2.setMonth(date.getMonth() - 3);
    inicioMes2.setUTCHours(0,0,0,0);

    let finalMes2= new Date();
    finalMes2.setMonth(date.getMonth() - 3);
    finalMes2.setDate(30);
    finalMes2.setUTCHours(0,0,0,0);

    let inicioMes1= new Date();
    inicioMes1.setDate(1);
    inicioMes1.setMonth(date.getMonth() - 2);
    inicioMes1.setUTCHours(-1,0,0,0);

    let finalMes1= new Date();
    finalMes1.setMonth(date.getMonth() - 2);
    finalMes1.setDate(31);
    finalMes1.setUTCHours(-1,0,0,0);

    let inicioMes= new Date();
    inicioMes.setDate(1);
    inicioMes.setMonth(date.getMonth() - 1);
    inicioMes.setUTCHours(-1,0,0,0);

    let finalMes= new Date();
    finalMes.setMonth(date.getMonth() - 1);
    finalMes.setDate(31);
    finalMes.setUTCHours(-1,0,0,0);

    this.mesSeis=0;
    this.mesCinco=0;
    this.mesCuatro=0;
    this.mesTres=0;
    this.mesDos=0;
    this.mesUno=0;
    
    this.idArticulo=event.detail.value;

    this.cantidadesArticulo=0;
    for(var i=0; i<this.datosPedidos?.length; i++){
     for(var j=0; j<this.datosPedidos[i]?.order_lines?.length; j++){
      
      if (this.idArticulo==this.datosPedidos[i]?.order_lines[j]?.articles_line[0]?.article_id){
        var fechaPedido = new Date(this.datosPedidos[i]?.order_lines[j]?.issue_date);

        if(fechaPedido>=inicioMes5&&fechaPedido<=finalMes5){
          this.mesSeis+=this.datosPedidos[i].order_lines[j].articles_line[0].num_articles;
        }
        if(fechaPedido>=inicioMes4&&fechaPedido<=finalMes4){
          this.mesCinco+=this.datosPedidos[i].order_lines[j].articles_line[0].num_articles;
        }
        if(fechaPedido>=inicioMes3&&fechaPedido<=finalMes3){    
          this.mesCuatro+=this.datosPedidos[i].order_lines[j].articles_line[0].num_articles;
        }
        if(fechaPedido>=inicioMes2&&fechaPedido<=finalMes2){
          this.mesTres+=this.datosPedidos[i].order_lines[j].articles_line[0].num_articles;
        }
        if(fechaPedido>=inicioMes1&&fechaPedido<=finalMes1){
          this.mesDos+=this.datosPedidos[i].order_lines[j].articles_line[0].num_articles;
        }
        if(fechaPedido>=inicioMes&&fechaPedido<=finalMes){    
          this.mesUno+=this.datosPedidos[i].order_lines[j].articles_line[0].num_articles;
        }
      }
    }
    }
    
    this.lineChartData=[
      {
        data:[this.mesSeis,this.mesCinco,this.mesCuatro,this.mesTres,this.mesDos,this.mesUno],label:"Cantidad"
      }
    ];
    this.lineChartLabels=[
      'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre', 'Enero'
    ];
    
  }

  async loadLogoutUser(message: string) {
    const loading = await this.loadingCtrl.create({
      message,
      duration: 850,
    });

    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    this.navCtrl.navigateForward('/login-almagest');
    this.alertLogoutUser();
  }

  async alertLogoutUser() {
    const logout = await this.alertCtrl.create({
      header: 'Logout',
      cssClass: 'logoutCss',
      message: '<strong>El usuario ha cerrado sesión correctamente.</strong>',
      buttons: [
        {
          text: 'Aceptar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (deactived) => {
          }
        }
      ]
    });
    await logout.present();
  }

}