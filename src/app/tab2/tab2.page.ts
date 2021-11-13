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
  token: any;


  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  onLogout() {
    this.token = localStorage.removeItem('token');
    console.log('Token eliminado: '+this.token);

    this.navCtrl.navigateForward('/login-almagest');
    console.log('El administrador ha cerrado la sesión');
  }
}
