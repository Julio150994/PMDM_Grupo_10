import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { NavController, AlertController, LoadingController, IonList } from '@ionic/angular';
import { UsersService } from '../services/users.service';



@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.page.html',
  styleUrls: ['./catalogos.page.scss'],
})
export class CatalogosPage implements OnInit {
  @ViewChild('catalogo', {static:true}) catalogo: IonList;

  url = environment.almagestUrl;
  productos: any;
  encabezadoProductos: any;
  articulos: any;
  id: any;
  token: any;
  tokenEliminado: any;
  productosReales: any[] = [];
  aparece: Boolean;
  prods: any[] = [];
  arts: any[] = [];

  constructor(private loadingCtrl: LoadingController,private alertCtrl: AlertController,
    private usersService: UsersService, private navCtrl: NavController) { }

  async ngOnInit() {
    console.log('página del usuario');
    await this.cargarEncabezado(localStorage.getItem('id_comp'),'Cargando encabezado...');
    await this.cargarListado(localStorage.getItem('id_comp'),'Cargando listado...');
  }

  onLogout() {
    console.log('Token de usuario eliminado: '+localStorage.getItem('token'));
    localStorage.removeItem('token');

    this.loadLogoutUser('Cerrando sesión...');
  }


  async cargarEncabezado(id: any, message: string) {
    const encabezado = await this.loadingCtrl.create({
      message,
      duration: 1000,
    });

    await encabezado.present();

    const { role, data } = await encabezado.onDidDismiss();

    this.usersService.getEncabezadoProductos()
    .then(async data => {
      this.encabezadoProductos = data;
      this.encabezadoProductos = this.encabezadoProductos.data;
    });
  }

  async cargarListado(id: any, message: string) {
    const listado = await this.loadingCtrl.create({
      message,
      duration: 1000,
    });

    await listado.present();

    const { role, data } = await listado.onDidDismiss();

    this.usersService.obtenerProductos().then(productos=>{
      this.productos = productos;
      this.productos = this.productos.data;
      this.prods = this.productos;
      this.usersService.obtenerArticulos(this.token).
      then(articulos=>{
        this.articulos = articulos;
        this.articulos = this.articulos.data;
        this.arts = this.articulos;
        for (let i = 0; i < this.arts?.length; i++) {
          this.aparece = false;
          for (let j = 0; j < this.prods?.length; j++) {
            if(this.prods[j].article_id === this.arts[i].id){
              this.aparece = true;
              break;
            }
          }
          if(this.aparece){
            this.productosReales.push(this.arts[i]);
          }
        }
      });
    });
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
            this.productoNoEliminado();
          }
        }, {
          text: 'SI',
          handler: async () => {
            this.usersService.removeProduct(id);
            await this.cargandoProducto('Borrando producto');
          }
        }
      ]
    });
    await alert.present();
  }

  async cargandoProducto(message: string) {
    const loadingProduct = await this.loadingCtrl.create({
      message,
      duration: 1750,
    });

    await loadingProduct.present();

    const { role, data } = await loadingProduct.onDidDismiss();

    this.productoEliminado();
  }

  async productoNoEliminado() {
    const eliminado = await this.alertCtrl.create({
      header: 'Mensaje',
      cssClass: 'productCss',
      message: '<strong>No has eliminado este producto.</strong>',
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
    await eliminado.present();
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

  async loadLogoutUser(message: string) {
    const loading = await this.loadingCtrl.create({
      message,
      duration: 850,
    });

    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    this.navCtrl.navigateForward('/login-almagest');
    this.alertLogoutUser();
  }

  async alertLogoutUser() {
    const logout = await this.alertCtrl.create({
      header: 'Logout',
      cssClass: 'logoutCss',
      message: '<strong>El usuario ha cerrado sesión correctamente.</strong>',
      buttons: [
        {
          text: 'Aceptar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (deactived) => {
          }
        }
      ]
    });
    await logout.present();
  }
}
