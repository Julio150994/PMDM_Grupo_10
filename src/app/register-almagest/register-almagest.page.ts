import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-register-almagest',
  templateUrl: './register-almagest.page.html',
  styleUrls: ['./register-almagest.page.scss'],
})
export class RegisterAlmagestPage implements OnInit {
  url = 'http://semillero.allsites.es/public/api';// //url = environment.almagestUrl;
  user: any;
  users: any;// en sucio
  companies: any;
  tok: any;
  token: any;
  f: any;

  /** Para el registro de usuarios que no sean el administrador */
  formularioRegistro = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    secondname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    c_password: new FormControl('',[Validators.required, Validators.minLength(5)]),
    compania: new FormControl('', [Validators.required]),
  });

  constructor(private alertUserCtrl: AlertController, private http: HttpClient, private navCtrl: NavController, private usersService: UsersService) { }

  ngOnInit() {
    console.log('Estas en la página de registrar usuarios.');
  }

  cancelarSeleccion(evento) {
    console.log('No ha seleccionado una compañía '+evento);
  }

  usuarios() {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': `Bearer `+this.tok.data.token
    })
    const path = `${this.url}/users`;
    return this.http.get<UsersService[]>(path,{headers:headers});
  }

  registrarUsuario() {
    this.f = this.formularioRegistro.value;

    if (this.f.password === this.f.c_password) {
      return new Promise((res) => {
        this.http.post<any>(this.usersService.url+'/register?'+'firstname='+this.f.firstname+
          '&secondname='+this.f.secondname+'&email='+this.f.email+'&password='+this.f.password+
          '&c_password='+this.f.c_password+'&company_id='+this.f.compania, {
      }).subscribe(datoUsuario => {
          console.log(datoUsuario);
          this.user = datoUsuario;
          res(this.user);
          console.log('User register successfully.');
        }, error => {
          console.log('Error al registrar este usuario '+error);
        });
      });
    }
    else {
      console.log('Ambas contraseñas deben coincidir.');
      this.alertContrasenias();
    }
  }

   async alertContrasenias() {
    const notEqualPassword = await this.alertUserCtrl.create({
      header: 'REGISTER',
      cssClass: 'registerCss',
      message: '<strong>Ambas contraseñas deben coincidir.</strong>',
      buttons: [
        {
          text: 'Aceptar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (register) => {
          }
        }
      ]
    });
    await notEqualPassword.present();
  }
}
