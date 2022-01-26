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
  empresas: any;
  datosEmpresaEmisora: any[]=[];
  datosEmpresaReceptora: any[]=[];
  empresaEmisora: any;
  empresaReceptora: any;

  constructor(private alertCtrl: AlertController, private navCtrl: NavController, private loadingCtrl: LoadingController,
    private pedidosService: PedidosService, private modalPedido: ModalController) { }

  async ngOnInit() {

    console.log('Modal para los pedidos.');

    this.pedidosService.obtenerCompanias().then(data => {
      console.log(data);
      this.empresas=data.data;
    });


    this.catalogo1();

    this.catalogo2();

    console.log('Catalogo empresa emmisora');

    await this.presentLoading();

    console.log(this.catalogoEmpresaEmisora);

    console.log('Catalogo empresa emisora');

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
    console.log(this.empresas);
    for(let i = 0; i < this.empresas?.length; i++){
      if(this.empresas[i].id == localStorage.getItem('id_comp')){
        this.datosEmpresaEmisora.push(this.empresas[i]);
      }
      if(this.empresas[i].id == localStorage.getItem('empresaPedido')){
        this.datosEmpresaReceptora.push(this.empresas[i]);
      }
    }
    console.log('Empresa Emisora');
    this.empresaEmisora=this.datosEmpresaEmisora[0];
    console.log(this.empresaEmisora);
    console.log('Empresa Emisora');
    console.log('Empresa Receptora');
    this.empresaReceptora=this.datosEmpresaReceptora[0];
    console.log(this.empresaReceptora);
    console.log('Empresa Receptora');

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
                table: {
                  body:[
                    [
                      {text: '\nLOGO EMPRESA\n\nNombre empresa: '+this.empresaEmisora.name+'\n\nDirección empresa: '+this.empresaEmisora.address+' \n\nProvincia empresa: '+this.empresaEmisora.city+'\n\nCIF empresa: '+this.empresaEmisora.cif+'\n\nEmail empresa: '+this.empresaEmisora.email+'\n ', colSpan: 2},
                      {},
                      {text: '\nPEDIDO Nº:'+localStorage.getItem('numFac')+'\n\nFECHA: '+localStorage.getItem('fecha'), colSpan: 4},
                      {},
                      {},
                      {},
                    ],
                    [
                      {text: 'Dirección de envío: '+this.empresaReceptora.address+'\nFecha de entrega: '+localStorage.getItem('fecha')+'\nTransporte: A nuestro cargo\nForma de pago: A elegir\nCondiciones de entrega: '+this.empresaReceptora.payment_term_id, colSpan: 2},
                      {},
                      {text: '', colSpan: 4},
                      {},
                      {},
                      {},
                    ],
                    [
                      {text: 'Ref.Cod'},
                      {text: 'Descripción'},
                      {text: 'Cantidad'},
                      {text: 'Precio', colSpan: 2},
                      {},
                      {text: 'Importe'},
                    ],
                    [
                      {text: 'celda 10'},
                      {text: 'celda 11'},
                      {text: 'celda 12'},
                      {text: 'celda 13', colSpan: 2},
                      {},
                      {text: 'celda 14'},
                    ],
                    [
                      {text: 'TOTAL',colSpan: 4},
                      {},
                      {},
                      {},
                      {text: '-	€	', colSpan: 2},
                      {},
                    ],
                    [
                      {text: 'Aceptado por',colSpan: 6},
                      {},
                      {},
                      {},
                      {},
                      {},
                    ],
                  ]
                }
              }
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


