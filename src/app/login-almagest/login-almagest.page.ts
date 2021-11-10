import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login-almagest',
  templateUrl: './login-almagest.page.html',
  styleUrls: ['./login-almagest.page.scss'],
})
export class LoginAlmagestPage implements OnInit {
  tok: any;
  token: any;
  users: any;
  user: any;
  email: string;
  password: string;
  loadingDatas: any;
  isLogin: boolean;// para comprobar si está logueado el usuario
  datos: any;


  constructor(private navCtrl: NavController, private usersService: UsersService,
    private cargaCtrl: LoadingController) { }

  ngOnInit() {
    console.log('Login');
    console.log(this.user);
  }

  toRegister() {
    console.log('Página de registrar usuario');
    this.navCtrl.navigateForward('/register-almagest');
  }

  loginUsuario() {
    this.loginLoad('Cargando aplicación...');// mensaje de carga

    setTimeout(() => {
      this.loadingDatas.dismiss();
    }, 1750);// tiempo de carga

    const datos = this.tok;
    this.token = datos;
    //this.email = this.user.controls.email.value;
    //this.password = this.user.controls.password.value;

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

    }
    else {
      console.log('Error al mostrar los usuarios.');
    }*/
  }

  async loginLoad(message: string) {
    this.loadingDatas = await this.cargaCtrl.create({
      message,
    });

    await this.loadingDatas.present();
  }
}
