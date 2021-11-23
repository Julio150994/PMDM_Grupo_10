import { Pipe, PipeTransform } from '@angular/core';
import {UsersService} from '../services/users.service';
import { LoadingController, AlertController } from '@ionic/angular';
@Pipe({
  name: 'buscador'
})
export class BuscadorPipe implements PipeTransform {
  constructor(private loadingCtrl: LoadingController, private alertCtrl: AlertController,private usersService: UsersService){}

  transform(articulos: any[], texto:string): any[] {
    if (!articulos || !texto) {
      return articulos;
    }
    texto=texto.toLowerCase();
    return articulos.filter(resultado => resultado.description.toLowerCase().includes(texto));
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      duration: 2000
    });
    await loading.present();
  }

}


