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
  companies: any;
  user: any;
  tok: any;
  token: any;
  form: any;
  datos: any;
  loading: any;

  formularioEditar = new FormGroup({
    id: new FormControl(''),
    firstname: new FormControl('', [Validators.required, Validators.minLength(1)]),
    secondname: new FormControl('', [Validators.required, Validators.minLength(1)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    compania: new FormControl('', [Validators.required]),
  });
  usuario: any;

  constructor(private alertContrasenia: AlertController,private loadingUserCtrl: LoadingController,private httpUser: HttpClient, private navCtrl: NavController, private usersService: UsersService) { 
  
  }

  async ngOnInit() {
    this.mostrarCompanias();

    this.usuario=this.usersService.usuario;
    this.formularioEditar.controls.id.setValue(this.usuario.id);
    this.formularioEditar.controls.firstname.setValue(this.usuario.firstname);
    this.formularioEditar.controls.secondname.setValue(this.usuario.secondname);
    this.formularioEditar.controls.email.setValue(this.usuario.email);
    this.formularioEditar.controls.compania.setValue(this.usuario.company_id);
    this.loadingUserCtrl.dismiss();
  }

  cancelarSeleccion(evento) {
    console.log('No ha seleccionado una compañía a editar '+evento);
  }

  mostrarCompanias() {
    this.usersService.obtenerCompanias()
    .then(data => {
      console.log(data);
      this.companies = data;
      this.companies = this.companies.data;
    });
  }

  editarUsuario() {
    this.navCtrl.navigateForward('/tabs/tab1');
    this.form = this.formularioEditar.value;
    this.token = localStorage.getItem('token');

    this.usersService.editar(this.token, this.form.id, this.form.firstname, this.form.secondname,
      this.form.email, this.form.password, this.form.compania);
  }
}
