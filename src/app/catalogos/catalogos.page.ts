import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { NavController, AlertController, LoadingController, IonList } from '@ionic/angular';
import { UsersService } from '../services/users.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.page.html',
  styleUrls: ['./catalogos.page.scss'],
})
export class CatalogosPage implements OnInit {
  @ViewChild('catalogo', {static:true}) catalogo: IonList;

  url = environment.almagestUrl;
  productos: any; //any[] = []
  id: any;

  constructor(private http: HttpClient,private loadingCtrl: LoadingController,private alertCtrl: AlertController,private usersService: UsersService, private navCtrl: NavController) { }

  ngOnInit() {
    console.log('página del usuario');
    this.id= this.usersService.compania;
    this.usersService.obtenerCatalogo(this.id)
    .then(data => {
      this.productos = data;
      this.productos = this.productos.data;
    });
  }

  onLogout() {
    this.navCtrl.navigateForward('/login-almagest');
    console.log('El usuario ha cerrado la sesión');
  }

  async formAniadirProducto() {
    console.log('Formulario añadir producto');
    this.navCtrl.navigateForward('/aniadir-producto');
  }

  async eliminar(id: string) {
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
            this.eliminarProducto(id);
            await this.loading('Borrando producto');
            console.log('Producto eliminado éxitosamente');
            this.ngOnInit();
          }
        }
      ]
    });
    await alert.present();
  }

  async loading(message: string) {
    const loading = await this.loadingCtrl.create({
      message,
      duration: 3500,
    });

    await loading.present();
  }


  eliminarProducto(id) {
    return new Promise((resolve, reject) => {
      console.log(localStorage.getItem('token'));
          this.http.delete(this.url+'/products/'+id, {
            headers: new HttpHeaders().set('Authorization', 'Bearer '+(localStorage.getItem('token')))
          }).subscribe(res => {
            console.log(res);
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  async editarProducto(id) {
    this.catalogo.closeSlidingItems();
    console.log('Id prueba: '+id);
  }
}
