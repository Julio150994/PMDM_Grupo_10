import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.page.html',
  styleUrls: ['./acceso.page.scss'],
})
export class AccesoPage implements OnInit {
  botones: GestionUsuarios[] = [
    {
      ruta: '/register',
      nombre: 'Registrar usuario',
      icono: 'person-add',
      color: 'success'
    },
    {
      ruta: '/login',
      nombre: 'Login usuario',
      icono: 'log-in',
      color: 'primary'
    }
  ];

  constructor() { }

  ngOnInit() {
    console.log('Estas en la página de inicio de la aplicación');
  }

}

interface GestionUsuarios {
  ruta: string;
  nombre: string;
  icono: string;
  color: string;
}
