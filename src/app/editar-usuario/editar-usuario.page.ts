import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.page.html',
  styleUrls: ['./editar-usuario.page.scss'],
})
export class EditarUsuarioPage implements OnInit {
  user = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.minLength(1)]),
    secondname: new FormControl('', [Validators.required, Validators.minLength(1)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    // eslint-disable-next-line @typescript-eslint/naming-convention
    c_password: new FormControl('password', [Validators.required, Validators.minLength(5)])
  });

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  editar() {
    this.navCtrl.navigateForward('/tab1');
    console.log(this.user);
  }

}
