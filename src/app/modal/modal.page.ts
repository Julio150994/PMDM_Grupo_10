import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, LoadingController, AlertController } from '@ionic/angular';
import { environment } from '../../environments/environment.prod';
import { PedidosService } from '../services/pedidos.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { format } from 'url';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  url = environment.almagestUrl;
  families: any;
  products: any;
  orders: any;
  nombreArticulo: '';
  formularioPedido = new FormGroup({
    article: new FormControl('',[Validators.required]),
  });
  familias: any;
  articulos: any;
  prueba="Raul";
  
  productos: any;
  contadorArticulos: number;
  contArticulo = 0;
  catalogoEmpresaEmisora: any;
  catalogoEmpresaReceptora: any;
  catalogoPedido: any[]=[];
  cantidades: any[]=[];
  seleccionado=false;
  idArticulo: any;
  pedidoReal: string;
  pdfCreado: any;

  constructor(private alertCtrl: AlertController, private navCtrl: NavController, private loadingCtrl: LoadingController,
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
        if(this.catalogoEmpresaEmisora[i].article_id == this.catalogoEmpresaReceptora[j].article_id){
          this.catalogoPedido.push(this.catalogoEmpresaEmisora[i]);
        }
      }
    }

    console.log(this.catalogoPedido);

    for(let i = 0; i < this.catalogoPedido?.length; i++){
      this.cantidades.push([this.catalogoPedido[i],0,false]);
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

  backToFormPedidos() {
    this.navCtrl.navigateForward('/usuarios/pedidos');
  }

  selectProductos(articulo, idArticulo,productoSeleccion,indice) {

    if (articulo.target.checked === true) {
      console.log(productoSeleccion);
      this.seleccionado=articulo.detail.checked;
      console.log(this.seleccionado);
      console.log(indice);
      this.idArticulo=idArticulo;
      console.log(this.idArticulo);
      this.cantidades[indice][2]=this.seleccionado;// aquí está la clave de todo el asunto
      console.log('Artículo seleccionado: '+articulo.detail.value);
      console.log('Id del artículo deseleccionado: '+idArticulo);
      console.log('Select: '+this.cantidades[indice][2]);// para imprimir el select de la condición
      for (let i = 0; i < this.cantidades?.length; i++){
        if(this.cantidades[i][2]==true){
          this.seleccionado=true;
        }
      }      
    }
    else {
      console.log(productoSeleccion);
      this.seleccionado=articulo.detail.checked;
      console.log(this.seleccionado);
      console.log(indice);
      this.cantidades[indice][2]=this.seleccionado;
      this.idArticulo=idArticulo;
      this.seleccionado = articulo.detail.checked;
      console.log('Artículo deseleccionado: '+articulo.detail.value);
      console.log('Id del artículo seleccionado: '+idArticulo);
      console.log('Select: '+this.cantidades[indice][2]);
      for (let i = 0; i < this.cantidades?.length; i++){
        if(this.cantidades[i][2]==true){
          this.seleccionado=true;
        }
      } 
      
    }
  }

  sumarProductos(cantidad: number,id: number) {
    //console.log(cantidad);
    //console.log(id);
    if(this.cantidades[id][1]>=0 && this.cantidades[id][1]<=39){
      this.cantidades[id][1]++;
    }

    //console.log('SUMA Id de artículo: '+this.cantidades[id][1]);
  }

  restarProductos(cantidad: number,id: number) {
    //console.log(cantidad);
    //console.log(id);
    if(this.cantidades[id][1]>0 && this.cantidades[id][1]<=40){
      this.cantidades[id][1]--;
    }
    
    //console.log('RESTA Id de artículo: '+this.cantidades[id][1]);
  }

  async aniadirPedido() {
    console.log('Pulsado el botón añadir pedido');
    console.log(this.cantidades);
    console.log(this.cantidades.toString());

    console.log('Factura de pedido generada: '+Math.floor((Math.random() * (100 - 1 + 1)) + 1).toFixed(2));
    const facturaPedido = Math.floor((Math.random() * (100 - 1 + 1)) + 1).toFixed(2);
    localStorage.setItem('numFac',facturaPedido);

    let date = new Date()

    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    if(month < 10){
      console.log(`${year}-0${month}-${day}`)
      localStorage.setItem('fecha',`${year}-0${month}-${day}`);
    }else{
      console.log(`${year}-${month}-${day}`)
      localStorage.setItem('fecha',`${year}-${month}-${day}`);
    }


    const fechaActual = new Date();
    const anio = Math.floor((Math.random() * (2021 - 2000 + 1)) + 2000);
    const fechaFactura = new Date(anio,0,1);

    const fecha = new Date(fechaFactura.getTime() + Math.random() * (fechaActual.getTime() - fechaFactura.getTime()));
    const formatoFecha = fecha.getFullYear()+'-'+this.getDateFormat(fecha.getMonth()+1)+'-'+this.getDateFormat(fecha.getDate());
    console.log('Fecha de pedido generada: '+formatoFecha);

    this.pedidoReal="";
    for (let i=0;i<this.cantidades?.length;i++){
      if(this.cantidades[i][2] == true && this.cantidades[i][1]>0) {
        this.pedidoReal+=this.cantidades[i][0].article_id+",";
        this.pedidoReal+=this.cantidades[i][1]+",";
      }
    }
    this.pedidoReal=this.pedidoReal.substring(0,this.pedidoReal.length-1);
    console.log(this.pedidoReal);
    localStorage.setItem('pedidoReal',this.pedidoReal);

    this.pedidosService.addOrder()
    .then(async data => {
      this.orders = data;
      this.orders = this.orders.data;
    });

    console.log('Pedido añadido correctamente');
    await this.pedidoAniadido();
    this.navCtrl.navigateForward('/usuarios/pedidos');
    this.generarPdf();
  }

  getDateFormat(aux) {
    return aux < 10 ? '0'+aux: aux;
  }

  generarPdf(){
    var pdfContenido = {
      content: [
		    {
			    style: 'tableExample',
			    table: {
				    widths: [300, '*', 145, '*'],
				    body: [
					    ['\t\t\t\t\tNombre empresa\n   LOGO\t\t\t\t\tDirección\nEMPRESA\t\t\t\t\tempresa\n \t\t\t\t\tProvincia\n \t\t\t\t\tempresa\n \t\t\tCIF empresa'],
					    ['Dirección de envío:\nFecha de entrega:\nTransporte:\t\t\t\t\tA nuestro cargo\nForma de pago:\nCondiciones de\nentrega:']
				    ]
			    }
		    },
      ]
    };
    this.pdfCreado=pdfMake.createPdf(pdfContenido);
    this.pdfCreado.download();
  }

  async pedidoAniadido() {
    const pedido = await this.alertCtrl.create({
      header: 'Mensaje',
      cssClass: 'orderCss',
      message: '<strong>Pedido añadido correctamente</strong>',
      buttons: [
        {
          text: 'Aceptar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: async() => {
            await this.presentLoading();
            window.location.reload();
          }
        }
      ]
    });

    await pedido.present();
  }
}


