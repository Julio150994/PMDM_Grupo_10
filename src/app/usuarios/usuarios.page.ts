import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UsersService } from '../services/users.service';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-usuarios',
  templateUrl: 'usuarios.page.html',
  styleUrls: ['usuarios.page.scss'],
})
export class UsuariosPage {
  url= environment.almagestUrl;
  catalogo: any;
  id: any;

  constructor(private usersService: UsersService,private loadingUserCtrl: LoadingController,private navCtrl: NavController, private http:HttpClient) { }

  async ngOnInit() {
    await this.presentLoading();
    console.log('página del usuario')
    this.id= await this.usersService.compania;
    console.log(this.id);
    this.obtenerCatalogo(this.id);
  }

  async presentLoading() {
    
    const loading = await this.loadingUserCtrl.create({
      message: 'Cargando usuario...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  onLogout() {
    this.navCtrl.navigateForward('/login-almagest');
    console.log('El usuario ha cerrado la sesión');
  }

  obtenerCatalogo(id) {
    return new Promise(res => {
      this.http.post(this.url+'/products/company?id='+id,{
        headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'))
      }).subscribe(data => {
        this.catalogo = data;
        this.catalogo=this.catalogo.data;
        console.log(this.catalogo);
        res(data);
      }, error => {
        console.log('Error al mostrar el catálogo de la compañia '+error);
      });
    });
  }

}
