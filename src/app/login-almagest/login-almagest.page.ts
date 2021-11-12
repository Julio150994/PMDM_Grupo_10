import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
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
  datos: any;

  user = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });
  usuario: any;

  constructor(private navCtrl: NavController,
    private usersService: UsersService) { }

  ngOnInit() {
    console.log('Login');
  }

  toRegister() {
    console.log('Página de registrar usuario');
    this.navCtrl.navigateForward('/register-almagest');
  }

  async loginUsuario() {
    if (this.user.valid) {
      this.datos = this.user.value;
      this.email=this.datos.email;
      this.password=this.datos.password;
      if(await this.usersService.activo(this.email)){
        await this.usersService.login(this.email,this.password)
        .then(data => {
          this.tok = data;
          this.usuario=this.tok.data;
          this.token = this.usuario.token;
          localStorage.setItem('token',this.token);
          if(this.usuario.type==='a'){
            this.navCtrl.navigateForward('/tabs/tab1');// ruta hacia el administrador
          }
          else{
            this.navCtrl.navigateForward('/tabs/tab2');// ruta hacia el usuario
          }
        });
      }
      else{
        console.log('usuario no activo')
      }
    }
    else {
      console.log('Error al mostrar los usuarios.');
    }
}

}
