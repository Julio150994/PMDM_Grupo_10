import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { NavController } from '@ionic/angular';
import { environment } from '../../environments/environment.prod';
import { UsersService } from '../services/users.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    compania: new FormControl('', [Validators.required]),
  });

  constructor(private httpUser: HttpClient, private navCtrl: NavController, private usersService: UsersService) { }

  ngOnInit() {
    console.log(this.datos);

    /*console.log(this.formularioEditar.controls.id.setValue(100));
    console.log(this.formularioEditar.controls.firstname.setValue('Ignacio'));
    console.log(this.formularioEditar.controls.secondname.setValue('López García'));
    console.log(this.formularioEditar.controls.email.setValue('ignaloge@gmail.com'));
    console.log(this.formularioEditar.controls.password.setValue('secret'));
    console.log(this.formularioEditar.controls.compania.setValue(2));*/
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

    this.token = localStorage.getItem('token');

    return new Promise(res => {
      this.httpUser.post<any>(this.usersService.url+'/users/updated?id='+this.form.id+'&firstname='+this.form.firstname+
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

}
