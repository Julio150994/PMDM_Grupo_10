import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-aniadir-articulo',
  templateUrl: './aniadir-articulo.page.html',
  styleUrls: ['./aniadir-articulo.page.scss'],
})
export class AniadirArticuloPage implements OnInit {
  url = environment.almagestUrl;
  articles: any;
  companies: any;
  families: any;

  formularioProducto = new FormGroup({
    article: new FormControl('',[Validators.required]),
    company: new FormControl('',[Validators.required]),
    price: new FormControl('', [Validators.required]),
    family: new FormControl('',[Validators.required])
  });

  constructor(private usersService: UsersService, private navCtrl: NavController,
    private loadingCtrl: LoadingController, private alertCtrl: AlertController) { }

  async ngOnInit() {
    await this.loadingForm();
    this.mostrarArticulos();
    await this.loadingForm();
    this.mostrarCompanias();
    await this.loadingForm();
    this.mostrarFamilias();
  }

  aniadirArticulo() {
    console.log('Artículo añadido correctamente');
    this.alertArticle();// mensaje de alerta para añadir artículo
    this.navCtrl.navigateForward('/usuarios/catalogos');
  }

  /**-------Para los select del formulario-----------*/
  mostrarArticulos() {
    this.usersService.obtenerArticulos()
    .then(data => {
      console.log(data);
      this.articles = data;
      this.articles = this.articles.data;
    });
  }

  mostrarCompanias() {
    this.usersService.obtenerCompanias()
    .then(data => {
      console.log(data);
      this.companies = data;
      this.companies = this.companies.data;
    });
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

  async alertArticle() {
    const addArticle = await this.alertCtrl.create({
      header: 'Artículo',
      cssClass: 'addArticle.css',
      message: 'Artículo añadido correctamente.',
      buttons: ['Aceptar']
    });
    await addArticle.present();
  }
}
