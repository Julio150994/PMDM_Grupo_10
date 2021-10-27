import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  /** Para los usuarios normales */
  usuarios: ListaUsuarios[] = [
    {
      firstname: 'Raúl',
      secondname: 'Reyes',
      email: 'raulmailto@gmail.com'
    },
    {
      firstname: 'Félix',
      secondname: 'Reyes',
      email: 'felixmailto@gmail.com'
    },
    {
      firstname: 'Rafa',
      secondname: 'Muñoz',
      email: 'rafamailto@gmail.com'
    }
  ];

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    console.log('Estás en la pestaña de inicio');
  }

  /** Eventos para la gestión de usuarios */
  onLogout() {
    console.log('¡admin ha cerrado la sesión!');
  }

  onActivar() {
    console.log('¡Usuario activado correctamente!');
  }

  onDesactivar() {
    console.log('¡Usuario desactivado correctamente!');
  }

  onEditar() {
    console.log('Has pulsado a editar');
  }

  onEliminar() {
    console.log('Has pulsado a eliminar');
  }

  /** Para mostrar los usuarios, obtenidos en el servicio */
  listarUsuarios() {
    this.usuariosService.getUsuarios()
    .subscribe(usuario => {
        console.log(usuario);
        //this.usuarios = usuario;
    });
  }
}

interface ListaUsuarios {
  firstname: string;
  secondname: string;
  email: string;
}
