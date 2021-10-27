import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  usuario = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.minLength(1)]),
    secondname: new FormControl('', [Validators.required, Validators.minLength(1)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    type: new FormControl('N')
  });

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    console.log('Estas en la página de registrar usuarios.');
  }

  registrar() {
    console.log('Has podido registrar a este usuario');
    this.navCtrl.navigateForward('/acceso');
    console.log(this.usuario);
  }

}
