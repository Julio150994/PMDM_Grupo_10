import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  url = environment.almagestUrl;
  empresas: any;
  productos: any;

  constructor(private httpUser: HttpClient,
    private loadingUserCtrl: LoadingController) { }

  async obtenerCompanias() {
    return new Promise<any>(res => {
      this.httpUser.get(this.url+'/companies').subscribe(data => {
        this.empresas = data;
        this.empresas=this.empresas.data;
        res(data);
      }, error => {
        console.log('Error al mostrar los usuarios '+error);
      });
    });
  }

  async obtenerCatalogo() {
    return new Promise(res => {
      this.httpUser.post(this.url+'/products/company?id='+localStorage.getItem('id_comp'),{
    headers: new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('token'))
    }).subscribe(data => {
        console.log(data);
        this.productos = data;
        this.productos=this.productos.data;
        res(data);
      }, error => {
        console.log('Error al mostrar los productos '+error);
      });
    });
  }

}
