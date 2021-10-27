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
      id: 1,
      firstname: 'Raúl',
      secondname: 'Reyes',
      email: 'raulmailto@gmail.com'
    },
    {
      id: 2,
      firstname: 'Félix',
      secondname: 'Reyes',
      email: 'felixmailto@gmail.com'
    },
    {
      id: 3,
      firstname: 'Rafa',
      secondname: 'Muñoz',
      email: 'rafamailto@gmail.com'
    }
  ];

  /** Para mostrar los botones correspondientes al enunciado del trabajo */
  botones: Operaciones[] = [
    {
      nombre: 'Activar',
      ruta: '/inicio',
      color: 'success',
      icono: 'play-outline'
    },
    {
      nombre: 'Desactivar',
      ruta: '/inicio',
      color: 'warning',
      icono: 'pause-outline'
    },
    {
      nombre: 'Editar',
      ruta: '/editar-usuario',
      color: 'tertiary',
      icono: 'person-circle-outline'
    },
    {
      nombre: 'Eliminar',
      ruta: '/inicio',
      color: 'danger',
      icono: 'trash-outline'
    }
  ];

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    console.log('Estás en la pestaña del usuario administrador');
  }

  /** Eventos para la gestión de usuarios */
  onLogout() {
    console.log('¡admin ha cerrado la sesión!');
  }

  /*onActivar() {
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
  }*/

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
  id: number;
  firstname: string;
  secondname: string;
  email: string;
}

interface Operaciones {
  nombre: string;
  ruta: string;
  color: string;
  icono: string;
}
