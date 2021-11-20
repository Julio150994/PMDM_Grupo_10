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
    //company: new FormControl('',[Validators.required]),
    price: new FormControl('', [Validators.required]),
    family: new FormControl('',[Validators.required])
  });
  productos: any;

  constructor(private usersService: UsersService, private navCtrl: NavController,
    private loadingCtrl: LoadingController, private alertCtrl: AlertController) { }

    async ngOnInit() {
      await this.loadingForm();
      this.mostrarArticulos();
      await this.loadingForm();
      this.mostrarFamilias();
    }

    async aniadirProducto() {
      console.log(this.usersService.user.company_id);
      await this.usersService.addProduct(this.token, this.formularioProducto.controls.article.value,
        this.usersService.user.company_id,
        this.formularioProducto.controls.price.value, this.formularioProducto.controls.family.value).then(data => {
        this.products = data;
        this.products = this.products.data;
      });

      await this.productoAniadido();
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
            handler: async () => {
              this.navCtrl.navigateForward('/usuarios/catalogos');
              await this.loadingForm();
              await this.ngOnInit();
            }
          }
        ]
      });
      await aniadido.present();
    }

    buscarArticulos(articulo) {
      //console.log(articulo);
      this.nombreArticulo = articulo.detail.value;

      const search = document.querySelector('ion-searchbar');
      //const items = Array.from(document.querySelector('ion-label').children);
      // Para realizar la búsqueda
      const items = Array.from(document.querySelector('ion-list').children);
      this.getDataArticles(items,articulo);
    }

    getDataArticles(indices, evento) {
      const query = evento.target.value;
      requestAnimationFrame(() => {
        indices.forEach(index => {
          const shouldShow = index.textContent.toLowerCase().indexOf(query) > -1;
          index.style.display = shouldShow ? 'block' : 'none';
        });
      });
    }
}

