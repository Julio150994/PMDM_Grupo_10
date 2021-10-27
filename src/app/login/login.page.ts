import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    console.log('Estas en la página de iniciar sesión con usuario.');
  }

  login() {
      this.navCtrl.navigateForward('/inicio');
      console.log(this.usuario);
  }
}
