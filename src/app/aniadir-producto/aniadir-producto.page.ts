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
  nombreArticulo:'';

  formularioProducto = new FormGroup({
    article: new FormControl('',[Validators.required]),
    //company: new FormControl('',[Validators.required]),
    price: new FormControl('', [Validators.required]),
    //family: new FormControl('',[Validators.required])
  });
  productos: any;
  articulos:any;

  constructor(private usersService: UsersService, private navCtrl: NavController,
    private loadingCtrl: LoadingController, private alertCtrl: AlertController) { }

   async ngOnInit() {
      this.usersService.getArticulos().
      subscribe(articulos=>{ 
        this.articulos = articulos;
        this.articulos=this.articulos.data;
      });
      await this.loadingForm();
      console.log('pasaillo');
      console.log(await this.articulos);
      await this.loadingForm();
      this.mostrarFamilias();
    }

    buscarArticulos(evento){
      this.nombreArticulo=evento.detail.value;
    }

    async aniadirProducto() {
      let familyId:number;
      let idArticulo=this.formularioProducto.controls.article.value;
      console.log(idArticulo);
      console.log(this.articles[idArticulo].family_id);
      familyId=this.articles[idArticulo].family_id;
      console.log(familyId);
      await this.usersService.addProduct(this.token, this.formularioProducto.controls.article.value,
        await this.usersService.user.company_id,this.formularioProducto.controls.price.value,familyId).then(data => {
        this.products = data;
        this.products = this.products.data;
      });

      await this.productoAniadido();
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
}

