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
  deshabilitado: boolean=false;

  formularioProducto = new FormGroup({
    article: new FormControl('',[Validators.required]),
    price: new FormControl('', [Validators.required]),
  });
  productos: any;
  articulos: any;
  longitud: any;
  id: any;

  constructor(private usersService: UsersService, private navCtrl: NavController,
    private loadingCtrl: LoadingController, private alertCtrl: AlertController) { }

   async ngOnInit() {
      await this.loadingForm('Cargando formulario...');

      this.usersService.obtenerArticulos().
      then(articulos=>{
        console.log(articulos);
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
      let familyId: number;
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

      if(this.productos?.length < 30 && (this.formularioProducto.controls.price.value >= this.articulos[idArticulo].price_min &&
        this.formularioProducto.controls.price.value <= this.articulos[idArticulo].price_max)){
        await this.loadingAddProduct('Cargando producto...');
        familyId = this.articulos[idArticulo].family_id;
        let numero: string;
      numero = familyId.toString();
      this.usersService.addProduct(this.token, this.formularioProducto.controls.article.value,
        this.usersService.user.company_id,this.formularioProducto.controls.price.value,numero).then(data => {
        this.products = data;
        this.products = this.products.data;
      });
      }
      else{
        if (this.formularioProducto.controls.price.value < this.articulos[idArticulo].price_min) {
          console.log('El precio mínimo es '+this.articulos[idArticulo].price_min);
        }
        else if (this.formularioProducto.controls.price.value > this.articulos[idArticulo].price_max) {
          console.log('El precio máximo es '+this.articulos[idArticulo].price_max);
        }
        else {
          console.log('Error. No puedes añadir más de 30 artículos.');
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

    async loadingAddProduct(message: string) {
      const formArticle = await this.loadingCtrl.create({
        message,
        duration: 2100
      });
      await formArticle.present();

      const { role, data } = await formArticle.onDidDismiss();

      this.navCtrl.navigateForward('/usuarios/catalogos');
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
            }
          }
        ]
      });
      await aniadido.present();
    }
}

