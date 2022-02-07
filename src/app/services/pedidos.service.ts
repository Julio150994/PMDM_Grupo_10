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
  articulos: any;
  name_comp: any;
  productos2: any;
  pedido: any;
  usuarios: any;
  datosPedidos: any;

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
        this.productos = data;
        this.productos=this.productos.data;
        res(data);
      }, error => {
        console.log('Error al mostrar los productos '+error);
      });
    });
  }

  async obtenerDatosPedidos() {
    return new Promise(res => {
      this.httpUser.post(this.url+'/orders/company?id='+localStorage.getItem('id_comp'),{
    headers: new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('token'))
    }).subscribe(data => {
        this.datosPedidos = data;
        this.datosPedidos=this.datosPedidos.data;
        res(data);
      }, error => {
        console.log('Error al mostrar los productos '+error);
      });
    });
  }

  async obtenerCatalogo2() {
    return new Promise(res => {
      this.httpUser.post(this.url+'/products/company?id='+localStorage.getItem('empresaPedido'),{
    headers: new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('token'))
    }).subscribe(data => {
        this.productos2 = data;
        this.productos2=this.productos2.data;
        res(data);
      }, error => {
        console.log('Error al mostrar los productos '+error);
      });
    });
  }

  // get<any>

  async obtenerArticulosUsuario() {
    return new Promise(res => {
      // localStorage.getItem('id_comp')

      this.httpUser.get<any>(this.url+'/articles',{
        headers: new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('token'))
      }).subscribe(data => {
        this.articulos = data;
        this.articulos = this.articulos.data;
        res(data);
      }, error => {
        console.log('Error al mostrar los artículos de la compañía '+error);
      });
    });
  }

  //num, issue_date, origin_company_id, target_company_id. products <------ variables a utilizar para el servicio
  async addOrder() {
    return new Promise(res => {
      this.httpUser.post<any>(this.url+'/orders?num='+localStorage.getItem('numFac')+'&issue_date='+localStorage.getItem('fecha')+'&origin_company_id='+localStorage.getItem('id_comp')+'&target_company_id='+localStorage.getItem('empresaPedido')+'&products='+localStorage.getItem('pedidoReal'),{
          headers: new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('token'))
        }).subscribe(datoPedido => {
            console.log(datoPedido);
            this.pedido = datoPedido;
            res(this.pedido);
            console.log('Pedido añadido correctamente');
        }, error => {
          console.log('Error al añadir este pedido. '+error);
        });
    });
  }

  obtenerUsuarios() {
    return new Promise(res => {
      this.httpUser.get(this.url+'/users',{
        headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'))
      }).subscribe(data => {
        this.usuarios = data;
        this.usuarios=this.usuarios.data;
        res(data);
      }, error => {
        console.log('Error al mostrar los usuarios '+error);
      });
    });
  }
}
