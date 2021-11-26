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
  company_name: string;
  longitud: any;
  id: any;
  id_comp: number;
  arts:any[]=[];
  prods:any[]=[];
  articulosReales:any[]=[];
  aparece: boolean;

  constructor(private usersService: UsersService, private navCtrl: NavController,
    private loadingCtrl: LoadingController, private alertCtrl: AlertController) { }


   async ngOnInit() {
      await this.loadingForm('Cargando formulario...');
      this.token = localStorage.getItem('token');

      this.usersService.obtenerProductos().then(productos=>{
        this.productos = productos;
        this.productos = this.productos.data;
        this.prods=this.productos;
        this.usersService.obtenerArticulos(this.token).
        then(articulos=>{
          this.articulos = articulos;
          this.articulos = this.articulos.data;
          this.arts=this.articulos;
          for (let i = 0; i < this.arts?.length; i++) {
            this.aparece=false;
            for (let j = 0; j < this.prods?.length; j++) {
              if(this.prods[j].article_id===this.arts[i].id){
                this.aparece=true;
                break;
              }
            }
            if(!this.aparece){
              this.articulosReales.push(this.arts[i]);
            }          
          }
        });
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
      this.token = localStorage.getItem('token');

      let familyId: number;
      let idArticulo = (this.formularioProducto.controls.article.value)-(1);
      this.usersService.obtenerArticulos(this.token).
      then(async articulos=>{
        this.articulos = articulos;
        this.articulos=this.articulos.data;
      });

      this.id= this.usersService.compania;
      this.usersService.obtenerCatalogo(this.id)
      .then(async data => {
        this.productos = data;
        this.productos = this.productos.data;

        if(this.productos?.length < 75 && (this.formularioProducto.controls.price.value >= this.articulos[idArticulo].price_min &&
          this.formularioProducto.controls.price.value <= this.articulos[idArticulo].price_max)){
          await this.loadingAddProduct('Cargando producto...');
          familyId = this.articulos[idArticulo].family_id;

          let idFamilia: string;
          idFamilia = familyId.toString();
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
        duration: 800
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
        duration: 100
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
        duration: 1
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
        duration: 1
      });

      await loadForm.present();

      const { role, data } = await loadForm.onDidDismiss();

      this.alertContadorArticulos(numeroArticulos);
    }

    async presentLoading() {
      const loading = await this.loadingCtrl.create({
        cssClass: 'my-custom-class',
        message: 'Cargando',
        duration: 1100
      });
      await loading.present();
  
      const { role, data } = await loading.onDidDismiss();
      console.log('Producto cargado éxitosamente');
    }

    async loadingAddProduct(message: string) {
      const formArticle = await this.loadingCtrl.create({
        message,
        duration: 100
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

              this.usersService.addProduct(this.token, this.formularioProducto.controls.article.value,
                localStorage.getItem('id_comp'),this.formularioProducto.controls.price.value,idFamilia)
                .then(async data => {
                  this.products = data;
                  this.products = this.products.data;
                });
              this.navCtrl.navigateRoot('/usuarios/catalogos');
              await this.presentLoading();
              window.location.reload();
              
            }
          }
        ]
      });
      await aniadido.present();
    }
}
