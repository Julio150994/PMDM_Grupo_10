import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { UsersService } from '../services/users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
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
  datos: any;

  user = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });
  usuario: any;
  id: any;
  deleted: any;
  email_confirmed: any;
  actived: any;

  constructor(private alertUserCtrl: AlertController,private navCtrl: NavController,
    private usersService: UsersService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    console.log('Login');
  }

  toRegister() {
    console.log('Página de registrar usuario');
    this.navCtrl.navigateForward('/register-almagest');
  }

  async userBaneado() {
    const notValid = await this.alertUserCtrl.create({
      header: 'LOGIN',
      cssClass: 'loginCss',
      message: '<strong>Usuario baneado por el administrador.Póngase en contacto en raul@raul.com.</strong>',
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

  async problemaCuenta() {
    const notValid = await this.alertUserCtrl.create({
      header: 'LOGIN',
      cssClass: 'loginCss',
      message: '<strong>Hay un problema con su cuenta. Escriba a raul@raul.com</strong>',
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

  async userSinActivar() {
    const notValid = await this.alertUserCtrl.create({
      header: 'LOGIN',
      cssClass: 'loginCss',
      message: '<strong>Tienes que esperar que el administrador active tu cuenta.</strong>',
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

  async usuarioLogueado() {
    const user = await this.alertUserCtrl.create({
      header: 'USER',
      cssClass: 'loginCss',
      message: '<strong>Usuario logueado correctamente.</strong>',
      buttons: [
        {
          text: 'Aceptar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (valid) => {
            this.navCtrl.navigateForward('/usuarios/catalogos');
          }
        }
      ]
    });
    await user.present();
  }

  async adminLogueado() {
    const user = await this.alertUserCtrl.create({
      header: 'ADMIN',
      cssClass: 'loginCss',
      message: '<strong>Administrador logueado correctamente.</strong>',
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
    await user.present();
  }

  async userSinConfirmar() {
    const notValid = await this.alertUserCtrl.create({
      header: 'LOGIN',
      cssClass: 'loginCss',
      message: '<strong>Tienes que confirmar tu cuenta entrando en el enlace que te hemos proporcionado en tu correo electrónico.</strong>',
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

  async cargarUsuario() {

    const loadingUser = await this.loadingCtrl.create({
      message: 'Cargando usuario...',
      duration: 1200
    });
    await loadingUser.present();

    const { role, data } = await loadingUser.onDidDismiss();
    
    this.usuarioLogueado();// después de cargar el usuario
  }

  async loginUsuario() {
    if (this.user.valid) {
      this.datos = this.user.value;
      this.email=this.datos.email;
      this.password=this.datos.password;
      await this.usersService.login(this.email,this.password)
        .then(async data => {
          this.tok = data;
          this.usuario=this.tok.data;
          this.token = this.usuario.token;
          localStorage.setItem('token',this.token);
          if(this.usuario.type==='a'){
            this.adminLogueado();
            this.navCtrl.navigateForward('/tabs/tab1');// ruta hacia el administrador
          }
          else{
            let usuario:any;
            usuario=await this.usersService.obtenerUsuarios(this.usuario.token);
            usuario=usuario.data;
            for (let i = 0; i < usuario.length; i++) {
              if(usuario[i].email===this.email){
                this.id=usuario[i].id;
                break;
              }
            }
            usuario=await this.usersService.obtenerIdUsuario(this.usuario.id);
            usuario=usuario.data;
            this.deleted=usuario.deleted;
            this.actived=usuario.actived;
            this.email_confirmed=usuario.email_confirmed;

            if(this.email_confirmed===0){
              this.userSinConfirmar();
            }
            else if(this.email_confirmed===1&&this.actived===0){
              this.userSinActivar();
            }
            else if(this.email_confirmed===1&&this.actived===1&&this.deleted===0){
              this.navCtrl.navigateForward('/usuarios/catalogos');
              this.usuarioLogueado();
            }
            else if(this.email_confirmed===1&&this.actived===1&&this.deleted===1){
              this.userBaneado();
            }
            else{
              this.problemaCuenta();
            }

          }
        });
    }
    else {
      console.log('Error al mostrar los usuarios.');
    }
}

}
