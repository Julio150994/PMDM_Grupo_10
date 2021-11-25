import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { NavController, AlertController, LoadingController, IonList } from '@ionic/angular';
import { UsersService } from '../services/users.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.page.html',
  styleUrls: ['./catalogos.page.scss'],
})
export class CatalogosPage implements OnInit {
  @ViewChild('catalogo', {static:true}) catalogo: IonList;

  url = environment.almagestUrl;
  productos: any;
  articulos: any;
  id: any;

  constructor(private http: HttpClient,private loadingCtrl: LoadingController,private alertCtrl: AlertController,
    private usersService: UsersService, private navCtrl: NavController) {
      console.log('puto ionic constructor');

     }
  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();
  
      this.usersService.obtenerCatalogo(localStorage.getItem('id_comp'))
      .then( async data => {
        this.productos = data;
        this.productos = this.productos.data;
        console.log(this.productos)
    });

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
   async ngOnInit() {
     //console.log('puto ionic');
await this.presentLoading();


    
  }

  onLogout() {
    this.navCtrl.navigateForward('/login-almagest');
    console.log('El usuario ha cerrado la sesión');
  }

  async formAniadirArticulo() {
    console.log('Formulario añadir producto'); 
   this.navCtrl.navigateForward('/aniadir-producto');

  }

  async eliminarProducto(id: string) {
    this.catalogo.closeSlidingItems();
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'ELIMINAR',
      message: '<strong>¿Estás seguro que deseas eliminar el producto?</strong>',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('No has eliminado este producto');
          }
        }, {
          text: 'SI',
          handler: async () => {
            this.usersService.removeProduct(id);
            await this.cargandoProducto('Borrando producto');
            console.log('Producto eliminado éxitosamente');
          }
        }
      ]
    });
    await alert.present();
  }

  async cargandoProducto(message: string) {
    const loadingProduct = await this.loadingCtrl.create({
      message,
      duration: 2000,
    });

    await loadingProduct.present();

    const { role, data } = await loadingProduct.onDidDismiss();

    this.productoEliminado();
  }

  async productoEliminado() {
    const eliminado = await this.alertCtrl.create({
      header: 'Mensaje',
      cssClass: 'productCss',
      message: '<strong>Producto eliminado correctamente.</strong>',
      buttons: [
        {
          text: 'Aceptar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: async () => {
            this.navCtrl.navigateForward('/usuarios/catalogos');
            this.ngOnInit();
          }
        }
      ]
    });
    await eliminado.present();
  }

  async editarProducto(id) {
    this.catalogo.closeSlidingItems();
    console.log('Id prueba: '+id);
  }
}
