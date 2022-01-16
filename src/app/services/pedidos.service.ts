import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  url = environment.almagestUrl;
  empresas: any;

  constructor(private httpUser: HttpClient,
    private loadingUserCtrl: LoadingController) { }

  async obtenerCompanias() {
    return new Promise<any>(res => {
      this.httpUser.get(this.url+'/companies').subscribe(data => {
        this.empresas = data;
        this.empresas=this.empresas.data;
        console.log("Empresas");
        console.log(this.empresas);
        console.log("Empresas");
        res(data);
      }, error => {
        console.log('Error al mostrar los usuarios '+error);
      });
    });
  }

}
