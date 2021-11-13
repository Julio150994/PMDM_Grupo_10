import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators, AbstractControl } from '@angular/forms';
import { NavController, LoadingController } from '@ionic/angular';
import { UsersService } from '../services/users.service';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit{
  api = 'http://semillero.allsites.es/public/api';
  users: any;
  user: any;
  tok: any;
  token: any;
  id: number;
  email: string;
  password: string;
  usuario: any;
  eliminarToken: any;

  constructor(private navCtrl: NavController, private usersService: UsersService) { }

  ngOnInit() {
  }

  onLogout() {
    this.token = localStorage.getItem('token');

    this.eliminarToken = this.usersService.logout(this.token).then(data => {
      this.users = data;
      this.users=this.users.data;
    });

    this.navCtrl.navigateForward('/login-almagest');
    console.log('El administrador ha cerrado la sesión');
  }
}
