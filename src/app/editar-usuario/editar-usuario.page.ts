import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular';
import { environment } from '../../environments/environment.prod';
import { UsersService } from '../services/users.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.page.html',
  styleUrls: ['./editar-usuario.page.scss'],
})
export class EditarUsuarioPage implements OnInit {
  url = environment.almagestUrl;
  users: any;
  user: any;
  tok: any;
  token: any;
  form: any;
  datos: any;


  formularioEditar = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.minLength(1)]),
    secondname: new FormControl('', [Validators.required, Validators.minLength(1)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    c_password: new FormControl('',[Validators.required, Validators.minLength(5)]),
    compania: new FormControl('', [Validators.required]),
  });
  usuario: any;

  constructor(private alertContrasenia: AlertController,private loadingUserCtrl: LoadingController,private httpUser: HttpClient, private navCtrl: NavController, private usersService: UsersService) { 
  
  }

  async ngOnInit() {
    this.presentLoading();
    this.usuario=this.usersService.usuario;
    this.formularioEditar.controls.firstname.setValue(this.usuario.firstname);
    this.formularioEditar.controls.secondname.setValue(this.usuario.secondname);
    this.formularioEditar.controls.email.setValue(this.usuario.email);
    this.formularioEditar.controls.compania.setValue(this.usuario.company_id);
    this.loadingUserCtrl.dismiss();
  }

  async presentLoading() {
    const loading = await this.loadingUserCtrl.create({
      message: 'Cargando...',
      duration: 500
    });
  }
  usuarios() {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': `Bearer `+this.tok.data.token
    })
    const path = `${this.url}/users`;
    return this.httpUser.get<UsersService[]>(path,{headers:headers});
  }

  

  async editarUsuario() {
    this.navCtrl.navigateForward('/tabs/tab1');
    this.form = this.formularioEditar.value;

    if (this.form.password === this.form.c_password) {
      this.token = localStorage.getItem('token');

      return new Promise(res => {
        this.httpUser.post<any>(this.usersService.url+'/users/updated/'+this.form.id+'&firstname='+this.form.firstname+
          '&secondname='+this.form.secondname+'&email='+this.form.email+'&password='+this.form.password+
          '&c_password='+this.form.c_password+'&company_id='+this.form.compania, {
          headers: new HttpHeaders().set('Authorization', 'Bearer '+this.token)
        }).subscribe(data => {
          console.log(data);
          this.token = data;
          this.users = data;
          this.users = this.users.data;
          res(this.users);
        }, error => {
          console.log('Error al editar usuario '+error);
        });
      });
    }
    else {
      console.log('Ambas contraseñas deben coincidir.');
      this.alertContrasenias();
    }
  }

  async alertContrasenias() {
    const notEqualPassword = await this.alertContrasenia.create({
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
