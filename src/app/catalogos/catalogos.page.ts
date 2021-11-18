import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { NavController, IonList } from '@ionic/angular';
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
  id: any;

  constructor(private usersService: UsersService, private navCtrl: NavController) { }

  async ngOnInit() {
    console.log('página del usuario');
    this.id= await this.usersService.compania;
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

  formAniadirProducto() {
    console.log('Formulario añadir producto');
    this.navCtrl.navigateForward('/aniadir-producto');
  }

  async eliminarProducto(id) {
    console.log('Id eliminar: '+id);
    this.catalogo.closeSlidingItems();
    this.navCtrl.navigateForward('/usuarios/catalogos');
  }

  async pruebaProducto(id) {
    this.catalogo.closeSlidingItems();
    console.log('Id prueba: '+id);
  }
}
