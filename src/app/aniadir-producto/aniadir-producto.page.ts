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
  companies: any;
  families: any;
  products: any;
  token: any;

  formularioProducto = new FormGroup({
    article: new FormControl('',[Validators.required]),
    company: new FormControl('',[Validators.required]),
    price: new FormControl('', [Validators.required]),
    family: new FormControl('',[Validators.required])
  });

  constructor(private usersService: UsersService, private navCtrl: NavController,
    private loadingCtrl: LoadingController, private alertCtrl: AlertController) { }

    async ngOnInit() {
      await this.loadingForm();
      this.mostrarArticulos();
      await this.loadingForm();
      this.mostrarCompanias();
      await this.loadingForm();
      this.mostrarFamilias();
    }

    aniadirProducto() {
      this.usersService.addProduct(this.token, this.formularioProducto.controls.article.value,
        this.formularioProducto.controls.company.value,
        this.formularioProducto.controls.price.value, this.formularioProducto.controls.family.value).then(data => {
        this.products = data;
        this.products = this.products.data;
      });

      this.productoAniadido();
      this.navCtrl.navigateForward('/usuarios/catalogos');
    }

    /**-------Para los select del formulario-----------*/
    mostrarArticulos() {
      this.usersService.obtenerArticulos()
      .then(data => {
        console.log(data);
        this.articles = data;
        this.articles = this.articles.data;
      });
    }

    mostrarCompanias() {
      this.usersService.obtenerCompanias()
      .then(data => {
        console.log(data);
        this.companies = data;
        this.companies = this.companies.data;
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

    async loadingForm() {
      const formArticle = await this.loadingCtrl.create({
        message: 'Cargando formulario...',
        duration: 1750
      });
      await formArticle.present();
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
            handler: (register) => {
            }
          }
        ]
      });
      await aniadido.present();
    }

}
