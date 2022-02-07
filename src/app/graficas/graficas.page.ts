import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { PedidosService } from '../services/pedidos.service';


@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.page.html',
  styleUrls: ['./graficas.page.scss'],
})
export class GraficasPage implements OnInit {

  productos:any;

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
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
        data: [ 180, 480, 770, 90, 1000, 270, 400 ],
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
    labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ]
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
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
      /*annotation: {
        annotations: [
          {
            type: 'line',
            scaleID: 'x',
            value: 'March',
            borderColor: 'orange',
            borderWidth: 2,
            label: {
              position: 'center',
              enabled: true,
              color: 'orange',
              content: 'LineAnno',
              font: {
                weight: 'bold'
              }
            }
          },
        ],
      }*/
    }
  };

  public lineChartType: ChartType = 'line';
  datosPedidos: any;
  idArticulo: number;
  cantidadesArticulo: number=0;

  // eslint-disable-next-line @typescript-eslint/member-ordering
  //@ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  private static generateNumber(i: number): number {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  /*public randomize(): void {
    for (let i = 0; i < this.lineChartData.datasets.length; i++) {
      for (let j = 0; j < this.lineChartData.datasets[i].data.length; j++) {
        this.lineChartData.datasets[i].data[j] = LineChartComponent.generateNumber(i);
      }
    }
    this.chart?.update();
  }*/

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  /*public hideOne(): void {
    const isHidden = this.chart?.isDatasetHidden(1);
    this.chart?.hideDataset(1, !isHidden);
  }*/

  /*public pushOne(): void {
    this.lineChartData.datasets.forEach((x, i) => {
      const num = LineChartComponent.generateNumber(i);
      x.data.push(num);
    });
    this.lineChartData?.labels?.push(`Label ${ this.lineChartData.labels.length }`);

    this.chart?.update();
  }*/

  /*public changeColor(): void {
    this.lineChartData.datasets[2].borderColor = 'green';
    this.lineChartData.datasets[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;

    this.chart?.update();
  }

  public changeLabel(): void {
    if (this.lineChartData.labels) {
      this.lineChartData.labels[2] = [ '1st Line', '2nd Line' ];
    }

    this.chart?.update();
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
    console.log(date.toLocaleDateString());

    let inicioMes6= new Date();
    inicioMes6.setDate(1);
    inicioMes6.setMonth(date.getMonth() - 7);
    console.log(inicioMes6.toLocaleDateString());
    
    let finalMes6= new Date();
    finalMes6.setMonth(date.getMonth() - 7);
    finalMes6.setDate(31);
    console.log(finalMes6.toLocaleDateString());

    let inicioMes5= new Date();
    inicioMes5.setDate(1);
    inicioMes5.setMonth(date.getMonth() - 6);
    console.log(inicioMes5.toLocaleDateString());
    
    let finalMes5= new Date();
    finalMes5.setMonth(date.getMonth() - 6);
    finalMes5.setDate(31);
    console.log(finalMes5.toLocaleDateString());

    let inicioMes4= new Date();
    inicioMes4.setDate(1);
    inicioMes4.setMonth(date.getMonth() - 5);
    console.log(inicioMes4.toLocaleDateString());
    
    let finalMes4= new Date();
    finalMes4.setMonth(date.getMonth() - 5);
    finalMes4.setDate(30);
    console.log(finalMes4.toLocaleDateString());

    let inicioMes3= new Date();
    inicioMes3.setDate(1);
    inicioMes3.setMonth(date.getMonth() - 4);
    console.log(inicioMes3.toLocaleDateString());
    
    let finalMes3= new Date();
    finalMes3.setMonth(date.getMonth() - 4);
    finalMes3.setDate(31);
    console.log(finalMes3.toLocaleDateString());

    let inicioMes2= new Date();
    inicioMes2.setDate(1);
    inicioMes2.setMonth(date.getMonth() - 3);
    console.log(inicioMes2.toLocaleDateString());
    
    let finalMes2= new Date();
    finalMes2.setMonth(date.getMonth() - 3);
    finalMes2.setDate(30);
    console.log(finalMes2.toLocaleDateString());

    let inicioMes1= new Date();
    inicioMes1.setDate(1);
    inicioMes1.setMonth(date.getMonth() - 2);
    console.log(inicioMes1.toLocaleDateString());
    
    let finalMes1= new Date();
    finalMes1.setMonth(date.getMonth() - 2);
    finalMes1.setDate(31);
    console.log(finalMes1.toLocaleDateString());



    
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
    console.log(this.datosPedidos[2].order_lines[0].articles_line[0].article_id);
    console.log('IdArticuloEnPedido');
    console.log('CantidadesDelArticulo');
    console.log(this.cantidadesArticulo);
    console.log('CantidadesDelArticulo');
    this.cantidadesArticulo=0;
    for(var i=0; i<this.datosPedidos?.length; i++){
      if (this.idArticulo==this.datosPedidos[i]?.order_lines[0]?.articles_line[0]?.article_id){
        this.cantidadesArticulo+=this.datosPedidos[i].order_lines[0].articles_line[0].num_articles;
      }
    }
    console.log(this.cantidadesArticulo);
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
