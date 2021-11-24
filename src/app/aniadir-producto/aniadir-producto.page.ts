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
  id: any;

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
      let familyId: number;
      let idArticulo = (this.formularioProducto.controls.article.value)-(1);
      await this.loadingForm('Cargando...');
      this.usersService.obtenerArticulos().
      then(async articulos=>{
        this.articulos = articulos;
        this.articulos=this.articulos.data;
      });

      this.id= this.usersService.compania;
    this.usersService.obtenerCatalogo(this.id)
    .then(data => {
      this.productos = data;
      this.productos = this.productos.data;
    });
    this.loadingCtrl.dismiss();
      console.log(this.productos.length);
     
      if(this.productos.length <30){
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
        console.log('NO SE PUEDEN AÑADIR MÁS DE 30 PRODUCTOS');
      }
      
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
        duration: 1080
      });

      await loadForm.present();
    }

    async loadingAddProduct(message: string) {
      const formArticle = await this.loadingCtrl.create({
        message,
        duration: 1750
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

