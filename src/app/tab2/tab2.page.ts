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



  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  onLogout() {
    this.navCtrl.navigateForward('/tabs/tab3');// hacia la página de login
    console.log('El administrador ha cerrado la sesión');
  }
}
