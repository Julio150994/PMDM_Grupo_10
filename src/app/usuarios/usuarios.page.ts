import { Component } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: 'usuarios.page.html',
  styleUrls: ['usuarios.page.scss'],
})
export class UsuariosPage {

  constructor() { }

  ngOnInit() {
    console.log('página del usuario')
  }

}
