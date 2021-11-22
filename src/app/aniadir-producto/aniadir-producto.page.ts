import { Component, OnInit } from '@angular/core';
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
  url = environment.almagestUrl;
  articles: any;
  families: any;
  products: any;
  token: any;
  nombreArticulo: '';

  formularioProducto = new FormGroup({
    article: new FormControl('',[Validators.required]),
    price: new FormControl('', [Validators.required]),
  });
  productos: any;
  articulos: any;

  constructor(private usersService: UsersService, private navCtrl: NavController,
    private loadingCtrl: LoadingController, private alertCtrl: AlertController) { }

   async ngOnInit() {
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

    async aniadirProducto() {
      let familyId: number;
      let idArticulo = (this.formularioProducto.controls.article.value)-(1);
      this.usersService.obtenerArticulos().
      then(async articulos=>{
        this.articulos = articulos;
        this.articulos=this.articulos.data;
      });
      
      await this.loadingFormProduct();

      console.log(idArticulo);
      console.log(this.articulos);
      familyId = this.articulos[idArticulo].family_id;
      console.log(familyId);
      let numero: string;
      numero = familyId.toString();
      this.usersService.addProduct(this.token, this.formularioProducto.controls.article.value,
        this.usersService.user.company_id,this.formularioProducto.controls.price.value,numero).then(data => {
        this.products = data;
        this.products = this.products.data;
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

    async loadingFormProduct() {
      const formArticle = await this.loadingCtrl.create({
        message: 'Cargando formulario...',
        duration: 1750
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
              this.navCtrl.navigateForward('/usuarios/catalogos');
            }
          }
        ]
      });
      await aniadido.present();
    }
}

