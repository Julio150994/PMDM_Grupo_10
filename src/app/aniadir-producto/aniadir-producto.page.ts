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
  families: any;
  products: any;
  nombreArticulo: '';
  formularioProducto = new FormGroup({
    article: new FormControl('',[Validators.required]),
    price: new FormControl('', [Validators.required]),
  });
  productos: any;
  articulos: any;
  id_comp: number;
  arts: any[] = [];
  prods: any[] = [];
  articulosReales: any[] = [];
  aparece: boolean;
  maximoArticulos= 5;
  familias: any;
  margen: any;

  constructor(private usersService: UsersService, private navCtrl: NavController,
    private loadingCtrl: LoadingController, private alertCtrl: AlertController) { }


  ngOnInit() {
      this.usersService.obtenerProductos().then(productos=>{
        this.productos = productos;
        this.productos = this.productos.data;
        this.prods=this.productos;
        this.usersService.obtenerArticulos(localStorage.getItem('token')).
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
      this.descripcionArticulo=articulo;
    }

    async aniadirProducto() {
      let familyId: number;
      let idArticulo = (this.formularioProducto.controls.article.value)-(1);
      this.usersService.obtenerArticulos(localStorage.getItem('token')).
      then(async articulos=>{
        this.articulos = articulos;
        this.articulos=this.articulos.data;
      });

      this.usersService.obtenerCatalogo(localStorage.getItem('id_comp'))
      .then(async data => {
        this.productos = data;
        this.productos = this.productos.data;
        familyId = this.articulos[idArticulo].family_id;
          this.familias=this.usersService.familias;
          for (let index = 0; index < this.familias.length; index++) {
            if(this.familias[index].id==familyId) {
              this.margen=(this.familias[index].profit_margin/100).toFixed(2);
            }

          }

          console.log(this.formularioProducto.controls.price.value+(this.formularioProducto.controls.price.value*this.margen));

        if(this.productos?.length < 5 && (this.formularioProducto.controls.price.value+(this.formularioProducto.controls.price.value*this.margen) >= this.articulos[idArticulo].price_min &&
          this.formularioProducto.controls.price.value+(this.formularioProducto.controls.price.value*this.margen) <= this.articulos[idArticulo].price_max)){
          this.productoAniadido(this.formularioProducto.controls.price.value+(this.formularioProducto.controls.price.value*this.margen));

        }
        else{

          if (this.formularioProducto.controls.price.value < this.articulos[idArticulo].price_min) {
            this.alertPrecioMinimo(this.articulos[idArticulo].price_min);
          }
          else if (this.formularioProducto.controls.price.value > this.articulos[idArticulo].price_max) {
            this.alertPrecioMaximo(this.articulos[idArticulo].price_max);
          }
          else if(this.formularioProducto.controls.price.value+(this.formularioProducto.controls.price.value*this.margen)>this.articulos[idArticulo].price_max){
            this.alertPrecioMaximo(this.articulos[idArticulo].price_max);
          }
          else {
            this.alertContadorArticulos();
          }
        }
      });
    }

    mostrarFamilias() {
      this.usersService.obtenerFamilias()
      .then(data => {
        this.families = data;
        this.families = this.families.data;
      });
    }
    async alertPrecioMinimo(precioMinimo: any) {
      const precio = await this.alertCtrl.create({
        header: 'Mensaje de error',
        cssClass: 'productCss',
        message: '<strong>El precio m??nimo es '+precioMinimo+'.</strong>',
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

    async alertPrecioMaximo(precioMaximo: any) {
      const maximo = await this.alertCtrl.create({
        header: 'Mensaje de error',
        cssClass: 'productCss',
        message: '<strong>El precio m??ximo es '+precioMaximo+'. El elegido con los beneficios es: '+(this.formularioProducto.controls.price.value+(this.formularioProducto.controls.price.value*this.margen))+'.</strong>',
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

    async alertContadorArticulos() {
      const maximo = await this.alertCtrl.create({
        header: 'Mensaje de error',
        cssClass: 'productCss',
        message: '<strong>No puedes a??adir m??s de '+this.maximoArticulos+' art??culos.</strong>',
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

    async presentLoading() {
      const loading = await this.loadingCtrl.create({
        duration: 1
      });
      await loading.present();
      const { role, data } = await loading.onDidDismiss();
    }

    async productoAniadido(margen) {
      const aniadido = await this.alertCtrl.create({
        header: 'Mensaje',
        cssClass: 'productCss',
        message: '<strong>Producto a??adido correctamente.Se sumar?? el margen de beneficio y el produto a??adido asciende a '+margen+'???</strong>',
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

              this.usersService.addProduct(localStorage.getItem('token'), this.formularioProducto.controls.article.value,
              localStorage.getItem('id_comp'),margen,idFamilia)
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
