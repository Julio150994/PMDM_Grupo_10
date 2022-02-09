import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
import {  ChartType, ChartDataset, } from 'chart.js';
import { PedidosService } from '../services/pedidos.service';
import * as moment from 'moment';

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
  public lineChartType: ChartType = 'bar';
  datosPedidos: any;
  idArticulo: number;
  cantidadesArticulo: number=0;

  public lineChartData: ChartDataset[] = [];
  lineChartLabels: string[];
    /*datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Series A',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
      {
        data: [ 28, 48, 40, 19, 86, 27, 90 ],
        label: 'Series B',
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)',
        fill: 'origin',
      },
      {
        data: this.datosGrafica,
        label: 'Series C',
        yAxisID: 'y-axis-1',
        backgroundColor: 'rgba(255,0,0,0.3)',
        borderColor: 'red',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      }
    ],
    labels: ['Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre', 'Enero' ]
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      'y-axis-0':
        {
          position: 'left',
        },
      'y-axis-1': {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red'
        }
      }
    },

    plugins: {
      legend: { display: true },
    }
  };

  

  private static generateNumber(i: number): number {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }*/

  
  constructor(private alertCtrl: AlertController, private navCtrl: NavController,
    private loadingCtrl: LoadingController,private pedidos:PedidosService) { }


  ngOnInit() {
    console.log('Pestaña de las gráficas');

    this.loadProducts();
    this.loadDatosPedidos();
  }
  onLogout() {
    localStorage.removeItem('token');

    this.loadLogoutAdmin('Cerrando sesión...');
    
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
      
    });

    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  calcularCantidades(event){

    let date = new Date();

    var formatoFecha = new Date(date);
    
    console.log(formatoFecha);

    //console.log(finalMes6.toLocaleDateString());

    let inicioMes5= new Date();
    inicioMes5.setDate(1);
    inicioMes5.setMonth(date.getMonth() - 6);

    var formatoFecha1 = new Date(inicioMes5);
  
    console.log(formatoFecha1);
    let fecha1: moment.Moment = moment(formatoFecha1);
    //console.log(inicioMes5.toLocaleDateString());
    
    let finalMes5= new Date();
    finalMes5.setMonth(date.getMonth() - 6);
    finalMes5.setDate(31);

    var formatoFecha2 = new Date(finalMes5);
  
    console.log(formatoFecha2);
    let fecha2: moment.Moment = moment(formatoFecha2);
    let inicioMes4= new Date();
    inicioMes4.setDate(1);
    inicioMes4.setMonth(date.getMonth() - 5);

    var formatoFecha3 = new Date(inicioMes4);
  
    console.log(formatoFecha3);
    let fecha3: moment.Moment = moment(formatoFecha3);
    //console.log(inicioMes4.toLocaleDateString());
    
    let finalMes4= new Date();
    finalMes4.setMonth(date.getMonth() - 5);
    finalMes4.setDate(30);

    var formatoFecha4 = new Date(finalMes4);

    console.log(formatoFecha4);
    let fecha4: moment.Moment = moment(formatoFecha4);
    //console.log(finalMes4.toLocaleDateString());

    let inicioMes3= new Date();
    inicioMes3.setDate(1);
    inicioMes3.setMonth(date.getMonth() - 4);

    var formatoFecha5 = new Date(inicioMes3);

    console.log(formatoFecha5);
    let fecha5: moment.Moment = moment(formatoFecha5);
    //console.log(inicioMes3.toLocaleDateString());
    
    let finalMes3= new Date();
    finalMes3.setMonth(date.getMonth() - 4);
    finalMes3.setDate(31);

    var formatoFecha6 = new Date(finalMes3);

    console.log(formatoFecha6);
    let fecha6: moment.Moment = moment(formatoFecha6);
    //console.log(finalMes3.toLocaleDateString());

    let inicioMes2= new Date();
    inicioMes2.setDate(1);
    inicioMes2.setMonth(date.getMonth() - 3);

    var formatoFecha7 = new Date(inicioMes2);

    console.log(formatoFecha7);
    let fecha7: moment.Moment = moment(formatoFecha7);
    //console.log(inicioMes2.toLocaleDateString());
    
    let finalMes2= new Date();
    finalMes2.setMonth(date.getMonth() - 3);
    finalMes2.setDate(30);

    var formatoFecha8 = new Date(finalMes2);

    console.log(formatoFecha8);
    let fecha8: moment.Moment = moment(formatoFecha8);
    //console.log(finalMes2.toLocaleDateString());

    let inicioMes1= new Date();
    inicioMes1.setDate(1);
    inicioMes1.setMonth(date.getMonth() - 2);

    var formatoFecha9 = new Date(inicioMes1);

    console.log(formatoFecha9);
    let fecha9: moment.Moment = moment(formatoFecha9);
    //console.log(inicioMes1.toLocaleDateString());
    
    let finalMes1= new Date();
    finalMes1.setMonth(date.getMonth() - 2);
    finalMes1.setDate(31);
    //console.log(finalMes1.toLocaleDateString());

    var formatoFecha10 = new Date(finalMes1);

    console.log(formatoFecha10);
    let fecha10: moment.Moment = moment(formatoFecha10);
    let inicioMes6= new Date();
    inicioMes6.setDate(1);
    inicioMes6.setMonth(date.getMonth() - 1);

    var formatoFecha11 = new Date(inicioMes6);
  
    console.log(formatoFecha11);
    let fecha11: moment.Moment = moment(formatoFecha11);
    //console.log(inicioMes6.toLocaleDateString());
    
    let finalMes6= new Date();
    finalMes6.setMonth(date.getMonth() - 1);
    finalMes6.setDate(31);

    var formatoFecha12 = new Date(finalMes6);
    //console.log(finalMes6.toLocaleDateString());
    let fecha12: moment.Moment = moment(formatoFecha12);
    console.log(formatoFecha12);
    this.mesSeis=0;
    this.mesCinco=0;
    this.mesCuatro=0;
    this.mesTres=0;
    this.mesDos=0;
    this.mesUno=0;
    
    console.log('IdArticuloSinVariable');
    console.log(event.detail.value);
    console.log('IdArticuloSinVariable');
    this.idArticulo=event.detail.value;
    console.log('Datos');
    console.log(this.datosPedidos);
    console.log('Datos');
    console.log('IdArticuloEnVariable');
    console.log(this.idArticulo);
    console.log('IdArticuloEnVariable');
    console.log('IdArticuloEnPedido');
   // console.log(this.datosPedidos[2].order_lines[0].articles_line[0].article_id);
    console.log('IdArticuloEnPedido');
    console.log('CantidadesDelArticulo');
    console.log(this.cantidadesArticulo);
    console.log('CantidadesDelArticulo');
    this.cantidadesArticulo=0;
    //console.log(this.datosPedidos[2].order_lines[0].issue_date);
    for(var i=0; i<this.datosPedidos?.length; i++){
      if (this.idArticulo==this.datosPedidos[i]?.order_lines[0]?.articles_line[0]?.article_id){
        this.cantidadesArticulo+=this.datosPedidos[i].order_lines[0].articles_line[0].num_articles;
        var fechaPedido = new Date(this.datosPedidos[i]?.order_lines[0]?.issue_date);
         console.log(fechaPedido);
         let fecha: moment.Moment = moment(fechaPedido);

        if(moment(fecha)>=moment(fecha1)&&(moment(fecha)<=moment(fecha2))){
          console.log('mesSeis');
          console.log(this.mesSeis);
          this.mesSeis+=this.datosPedidos[i].order_lines[0].articles_line[0].num_articles;
        }
        if(moment(fecha)>=moment(fecha3)&&(moment(fecha)<=moment(fecha4))){
          console.log('mesCinco');
          console.log(this.mesCinco);
          this.mesCinco+=this.datosPedidos[i].order_lines[0].articles_line[0].num_articles;
        }
        if(moment(fecha)>=moment(fecha5)&&(moment(fecha)<=moment(fecha6))){
          console.log('mesCuatro');
          console.log(this.mesCuatro);
          this.mesCuatro+=this.datosPedidos[i].order_lines[0].articles_line[0].num_articles;
        }
        if(moment(fecha)>=moment(fecha7)&&(moment(fecha)<=moment(fecha8))){
          console.log('mesTres');
          console.log(this.mesTres);
          this.mesTres+=this.datosPedidos[i].order_lines[0].articles_line[0].num_articles;
        }
        if(moment(fecha)>=moment(fecha9)&&(moment(fecha)<=moment(fecha10))){
          console.log('mesDos');
          console.log(this.mesDos);
          this.mesDos+=this.datosPedidos[i].order_lines[0].articles_line[0].num_articles;
        }
        console.log(moment(fecha));
        if(moment(fecha)>=moment(fecha11)&&(moment(fecha)<=moment(fecha12))){
          console.log('mesUno');
          console.log(this.mesUno);
          this.mesUno+=this.datosPedidos[i].order_lines[0].articles_line[0].num_articles;
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

  async loadLogoutAdmin(message: string) {
    const loading = await this.loadingCtrl.create({
      message,
      duration: 850,
    });

    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    this.navCtrl.navigateForward('/login-almagest');
    this.alertLogoutAdmin();
  }

  async alertLogoutAdmin() {
    const logout = await this.alertCtrl.create({
      header: 'Logout',
      cssClass: 'logoutCss',
      message: '<strong>El administrador ha cerrado sesión correctamente.</strong>',
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
