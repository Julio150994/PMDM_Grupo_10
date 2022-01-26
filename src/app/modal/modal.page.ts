import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController, Platform } from '@ionic/angular';
import { environment } from '../../environments/environment.prod';
import { PedidosService } from '../services/pedidos.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
//import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { File } from '@awesome-cordova-plugins/file/ngx';
import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';


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
  pedidoPdf: any[]=[];
  totalPedido: number;
  docDefinition: any;

  constructor(private alertCtrl: AlertController, private navCtrl: NavController, private loadingCtrl: LoadingController,
    private pedidosService: PedidosService,public file:File,public fileOpener:FileOpener,public platform:Platform) { }

    // private mailComposer: EmailComposer

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

    const facturaPedido = Math.floor((Math.random() * (100 - 1 + 1)) + 1).toFixed(0);
    localStorage.setItem('numFac',facturaPedido);

    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if(month < 10){
      console.log(`${year}-0${month}-${day}`);
      localStorage.setItem('fecha',`${year}-0${month}-${day}`);
    }else{
      console.log(`${year}-${month}-${day}`);
      localStorage.setItem('fecha',`${year}-${month}-${day}`);
    }


    const fechaActual = new Date();
    const anio = Math.floor((Math.random() * (2021 - 2000 + 1)) + 2000);
    const fechaFactura = new Date(anio,0,1);

    const fecha = new Date(fechaFactura.getTime() + Math.random() * (fechaActual.getTime() - fechaFactura.getTime()));
    const formatoFecha = fecha.getFullYear()+'-'+this.getDateFormat(fecha.getMonth()+1)+'-'+this.getDateFormat(fecha.getDate());
    console.log('Fecha de pedido generada: '+formatoFecha);

    this.pedidoReal="";
    this.totalPedido=0;
    for (let i=0;i<this.cantidades?.length;i++){
      if(this.cantidades[i][2] == true && this.cantidades[i][1]>0) {
        this.pedidoReal+=this.cantidades[i][0].article_id+",";
        this.pedidoReal+=this.cantidades[i][1]+",";
        this.pedidoPdf.push(this.cantidades[i][0].article_id);
        this.pedidoPdf.push(this.cantidades[i][0].compamy_name);
        this.pedidoPdf.push(this.cantidades[i][1]);
        this.pedidoPdf.push(this.cantidades[i][0].price);
        this.pedidoPdf.push((this.cantidades[i][0].price)*(this.cantidades[i][1]));
        this.totalPedido=(this.totalPedido+(this.cantidades[i][0].price)*(this.cantidades[i][1]));
        console.log(this.totalPedido);
      }
    }
    console.log(this.totalPedido);
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
    console.log(this.pedidoPdf);
    this.generarPdf();
    this.enviarInformePedido();
  }

  getDateFormat(aux) {
    return aux < 10 ? '0'+aux: aux;
  }

  abrirArchivo(){
    /*if(this.platform.is('cordova')){
      this.pdfCreado.getBuffer((buffer) => {
        var blob= new Blob([buffer],{type: 'application/pdf'});
        this.file.writeFile(this.file.dataDirectory,'pedidoAlmagest.pdf',blob,{ replace: true }).then(fileEntry =>{
        this.fileOpener.open(this.file.dataDirectory+'pedidoAlmagest.pdf','application/pdf');
        });
      });

      return true;
    }
    this.pdfCreado.download();*/
    this.pdfCreado = pdfMake.createPdf(this.docDefinition);
    if(this.platform.is('cordova')){
      pdfMake.createPdf(this.docDefinition).getBlob(buffer => {
        this.file.resolveDirectoryUrl(this.file.cacheDirectory)
        .then(dirEntry => {
          this.file.getFile(dirEntry, 'pedidoAlmagest.pdf', { create: true})
            .then(fileEntry => {
              fileEntry.createWriter(writer => {
                writer.onwrite = () => {
                  this.fileOpener.open(fileEntry.toURL(), 'application/pdf');
                }
                writer.write(buffer);
              })
            })
        });

      });
  }else{
    this.pdfCreado.download();
  }
}

  generarPdf(){
     this.docDefinition = {
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
                      {text: '\nDirección de envío: '+this.empresaReceptora.address+'\n\nFecha de entrega: '+localStorage.getItem('fecha')+'\n\nTransporte: A nuestro cargo\n\nForma de pago: A elegir\n\nCondiciones de entrega: '+this.empresaReceptora.payment_term_id+'\n ', colSpan: 2},
                      {},
                      {text: '', colSpan: 4},
                      {},
                      {},
                      {},
                    ],
                    [
                      {text: '\nRef.Cod\n '},
                      {text: '\nDescripción\n '},
                      {text: '\nCantidad\n '},
                      {text: '\nPrecio\n ', colSpan: 2},
                      {},
                      {text: '\n Importe\n '},
                    ],
                    [
                     
                      {text: '\n'+this.pedidoPdf.slice(0,1)+'\n'+this.pedidoPdf.slice(5,6)+'\n'+this.pedidoPdf.slice(10,11)+'\n'+this.pedidoPdf.slice(15,16)+'\n'+this.pedidoPdf.slice(20,21)+'\n '},
                      {text: '\n'+this.pedidoPdf.slice(1,2)+'\n'+this.pedidoPdf.slice(6,7)+'\n'+this.pedidoPdf.slice(11,12)+'\n'+this.pedidoPdf.slice(16,17)+'\n'+this.pedidoPdf.slice(21,22)+'\n '},
                      {text: '\n'+this.pedidoPdf.slice(2,3)+'\n'+this.pedidoPdf.slice(7,8)+'\n'+this.pedidoPdf.slice(12,13)+'\n'+this.pedidoPdf.slice(17,18)+'\n'+this.pedidoPdf.slice(22,23)+'\n '},
                      {text: '\n'+this.pedidoPdf.slice(3,4)+'\n'+this.pedidoPdf.slice(8,9)+'\n'+this.pedidoPdf.slice(13,14)+'\n'+this.pedidoPdf.slice(18,19)+'\n'+this.pedidoPdf.slice(23,24)+'\n ', colSpan: 2},
                      {},
                      {text: '\n'+this.pedidoPdf.slice(4,5)+'\n'+this.pedidoPdf.slice(9,10)+'\n'+this.pedidoPdf.slice(14,15)+'\n'+this.pedidoPdf.slice(19,20)+'\n'+this.pedidoPdf.slice(24,25)+'\n '},
                    ],
                    [
                      {text: '\nTOTAL\n ',colSpan: 4},
                      {},
                      {},
                      {},
                      {text: '\n'+(this.totalPedido)+'€\n ', colSpan: 2},
                      {},
                    ],
                    [
                      {text: '\nAceptado por\n ',colSpan: 6},
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
    this.pdfCreado=pdfMake.createPdf(this.docDefinition);
    this.abrirArchivo();
  }

  enviarInformePedido() {
    let gmailPedido = {
      app: 'gmail',
      to: 'munoz.chjul20@cadiz.salesianos.edu',
      cc: 'marianojota95@gmail.com',
      subject: 'Pedido',
      body: '¡¡Ya puedes descargar el informe de tu pedido!!',
      isHtml: true
    };
    //this.mailComposer.open(gmailPedido);
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