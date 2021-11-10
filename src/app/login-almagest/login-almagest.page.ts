import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { UsersService } from '../services/users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-almagest',
  templateUrl: './login-almagest.page.html',
  styleUrls: ['./login-almagest.page.scss'],
})
export class LoginAlmagestPage implements OnInit {
  tok: any;
  token: any;
  users: any;
  email: string;
  password: string;
  loadingDatas: any;
  datos: any;

  user = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    // eslint-disable-next-line @typescript-eslint/naming-convention
    //c_email: new FormControl('email', [Validators.required, Validators.email])
  });

  constructor(private alertUserCtrl: AlertController, private navCtrl: NavController,
    private usersService: UsersService, private cargaCtrl: LoadingController) { }

  ngOnInit() {
    console.log('Login');
    //console.log(this.user);
  }

  toRegister() {
    console.log('Página de registrar usuario');
    this.navCtrl.navigateForward('/register-almagest');
  }

  loginUsuario() {
    const datos = this.tok;
    this.token = datos;
    //this.email = this.user.controls.email.value;
    //this.password = this.user.controls.password.value;

    setTimeout(() => {
      this.loadingDatas.dismiss();
    }, 1750);// tiempo de carga

    if (this.user.valid) {
      this.datos = this.user.value;
      this.email=this.datos.email;
      this.password=this.datos.password;
     // console.log(this.datos.email);
      //console.log(this.datos.password);
        //console.log('User login successfully');
    this.datos = this.user.value;
    this.email=this.datos.email;
    this.password=this.datos.password;
    console.log(this.datos.email);
    console.log(this.datos.password);
    //console.log('User login successfully');

    //console.log('Email: '+this.email);
    //console.log('Password: '+this.password);

    this.usersService.login(this.email,this.password)
    .then(data => {
      this.tok = data;
      this.tok = this.tok.data.token;
      //console.log('Token: '+this.tok);
      //console.log('Datos: '+data);
      //this.usersService.obtenerUsuarios(this.tok);
      this.navCtrl.navigateForward('/tabs/tab1');// ruta hacia el administrador
    });

    /*if (this.user.valid) {

        this.usersService.login(this.email,this.password)
        .then(data => {
          this.tok = data;
          this.tok = this.tok.data.token;
         // console.log('Token: '+this.tok);
          this.loginLoad('Cargando aplicación...');// mensaje de carga
          setTimeout(() => {
            this.loadingDatas.dismiss();
          }, 1750);// tiempo de carga
          this.navCtrl.navigateForward('/tabs/tab1');// ruta hacia el administrador

          this.usersService.obtenerUsuarios();
        });
    }
    else {
      console.log('Error al mostrar los usuarios.');
    }*/
  }

}

/** Para mostrar mensaje de alerta de que no existe el usuario */
  async userNotFound() {
    const notValid = await this.alertUserCtrl.create({
      header: 'Mensaje de alerta',
      cssClass: 'loginCss',
      message: '<strong>El usuario '+this.user.controls.email.value+' no existe</strong>',
      buttons: [
        {
          text: 'Aceptar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (valid) => {
          }
        }
      ]
    });
    await notValid.present();
  }


  async loginLoad(message: string) {
    this.loadingDatas = await this.cargaCtrl.create({
      message,
    });
    await this.loadingDatas.present();
  }
}
