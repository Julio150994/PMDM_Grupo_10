import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { NavController, LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-aniadir-producto',
  templateUrl: './aniadir-producto.page.html',
  styleUrls: ['./aniadir-producto.page.scss'],
})
export class AniadirProductoPage implements OnInit {
  @Input() descripcionArticulo: any;

  url = environment.almagestUrl;
  articles: any;
  families: any;
  products: any;
  token: any;
  nombreArticulo: '';
  deshabilitado: boolean = false;
  mensajeError: string;

  formularioProducto = new FormGroup({
    article: new FormControl('',[Validators.required]),
    price: new FormControl('', [Validators.required]),
  });
  productos: any;
  articulos: any;
  longitud: any;
  id: any;
  id_comp: number;

  constructor(private usersService: UsersService, private navCtrl: NavController,
    private loadingCtrl: LoadingController, private alertCtrl: AlertController) { }


   async ngOnInit() {
      await this.loadingForm('Cargando formulario...');

      this.usersService.obtenerArticulos().
      then(articulos=>{
        this.articulos = articulos;
        this.articulos=this.articulos.data;
      });

      this.mostrarFamilias();
    }

    buscarArticulos(evento){
      this.nombreArticulo=evento.detail.value;
    }

    seleccionarArticulo(articulo) {
      this.deshabilitado=true;
      this.descripcionArticulo =articulo;
    }

    async aniadirProducto() {
      let idArticulo = (this.formularioProducto.controls.article.value)-(1);
      await this.loadingForm('Cargando...');
      this.usersService.obtenerArticulos().
      then(async articulos=>{
        this.articulos = articulos;
        this.articulos=this.articulos.data;
      });

      await this.loadingForm('Cargando...');
      this.id= this.usersService.compania;
      this.usersService.obtenerCatalogo(this.id)
      .then(async data => {
        this.productos = data;
        this.productos = this.productos.data;

        if(this.productos?.length < 75 && (this.formularioProducto.controls.price.value >= this.articulos[idArticulo].price_min &&
          this.formularioProducto.controls.price.value <= this.articulos[idArticulo].price_max)){
          await this.loadingAddProduct('Cargando producto...');
        }
        else{

          if (this.formularioProducto.controls.price.value < this.articulos[idArticulo].price_min) {
            this.loadingMinimo('Cargando producto...',this.articulos[idArticulo].price_min);
          }
          else if (this.formularioProducto.controls.price.value > this.articulos[idArticulo].price_max) {
            this.loadingMaximo('Cargando producto...',this.articulos[idArticulo].price_max);
          }
          else {
            this.loadingLengthArticles('Cargando producto...',this.productos?.length);
          }
        }
      });
    }

    mostrarFamilias() {
      this.usersService.obtenerFamilias()
      .then(data => {
        console.log(data);
        this.families = data;
        this.families = this.families.data;
      });
    }

    async loadingForm(message: string) {
      const loadForm = await this.loadingCtrl.create({
        message,
        duration: 3500
      });

      await loadForm.present();
    }

    async alertPrecioMinimo(precioMinimo: any) {
      const precio = await this.alertCtrl.create({
        header: 'Mensaje de error',
        cssClass: 'productCss',
        message: '<strong>El precio mínimo es '+precioMinimo+'.</strong>',
        buttons: [
          {
            text: 'Aceptar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: async () => {
            }
          }
        ]
      });
      await precio.present();
    }

    async loadingMinimo(message: string, precioMinimo: any) {
      const loadForm = await this.loadingCtrl.create({
        message,
        duration: 1200
      });

      await loadForm.present();

      const { role, data } = await loadForm.onDidDismiss();

      this.alertPrecioMinimo(precioMinimo);
    }


    async alertPrecioMaximo(precioMaximo: any) {
      const maximo = await this.alertCtrl.create({
        header: 'Mensaje de error',
        cssClass: 'productCss',
        message: '<strong>El precio máximo es '+precioMaximo+'.</strong>',
        buttons: [
          {
            text: 'Aceptar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: async () => {
            }
          }
        ]
      });
      await maximo.present();
    }

    async loadingMaximo(message: string, precioMaximo: any) {
      const loadForm = await this.loadingCtrl.create({
        message,
        duration: 1200
      });

      await loadForm.present();

      const { role, data } = await loadForm.onDidDismiss();

      this.alertPrecioMaximo(precioMaximo);
    }


    async alertContadorArticulos(numeroArticulos: any) {
      const maximo = await this.alertCtrl.create({
        header: 'Mensaje de error',
        cssClass: 'productCss',
        message: '<strong>No puedes añadir más de'+numeroArticulos+' artículos.</strong>',
        buttons: [
          {
            text: 'Aceptar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: async () => {
            }
          }
        ]
      });
      await maximo.present();
    }

    async loadingLengthArticles(message: string, numeroArticulos: any) {
      const loadForm = await this.loadingCtrl.create({
        message,
        duration: 1200
      });

      await loadForm.present();

      const { role, data } = await loadForm.onDidDismiss();

      this.alertContadorArticulos(numeroArticulos);
    }

    async presentLoading() {
      const loading = await this.loadingCtrl.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
        duration: 2000
      });
      await loading.present();
  
      const { role, data } = await loading.onDidDismiss();
      console.log('Loading dismissed!');
    }

    async loadingAddProduct(message: string) {
      const formArticle = await this.loadingCtrl.create({
        message,
        duration: 2100
      });
      await formArticle.present();

      const { role, data } = await formArticle.onDidDismiss();
      this.productoAniadido();
    }
    async productoAniadido() {
      const aniadido = await this.alertCtrl.create({
        header: 'Mensaje',
        cssClass: 'productCss',
        message: '<strong>Producto añadido correctamente.</strong>',
        buttons: [
          {
            text: 'Aceptar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: async () => {
              let idArticulo = (this.formularioProducto.controls.article.value)-(1);
              let familyId: number;
              familyId = this.articulos[idArticulo].family_id;
        
                  let idFamilia: string;
                  idFamilia = familyId.toString();
                   this.id_comp=localStorage.getItem('id_comp');
        
              
              this.usersService.addProduct(this.token, this.formularioProducto.controls.article.value,
                this.id_comp,this.formularioProducto.controls.price.value,idFamilia)
                .then(async data => {
                  this.products = data;
                  this.products = this.products.data;
                });
              this.navCtrl.navigateRoot('/usuarios/catalogos');
            }
          }
        ]
      });
      await aniadido.present();
    }
}
