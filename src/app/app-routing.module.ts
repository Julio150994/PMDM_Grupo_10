import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';
import { UsuariosPage } from './usuarios/usuarios.page';


const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
      }
    ]
  },
  {
    path: 'editar-usuario',
    loadChildren: () => import('./editar-usuario/editar-usuario.module').then( m => m.EditarUsuarioPageModule)
  },
  {
    path: 'login-almagest',
    loadChildren: () => import('./login-almagest/login-almagest.module').then( m => m.LoginAlmagestPageModule)
  },
  {
    path: 'register-almagest',
    loadChildren: () => import('./register-almagest/register-almagest.module').then( m => m.RegisterAlmagestPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosPageModule)
  },
  {
    path: 'usuarios',
    component: UsuariosPage,
    children: [
      {
        path: 'catalogos',
        loadChildren: () => import('./catalogos/catalogos.module').then(m => m.CatalogosPageModule)
      },
      {
        path: 'pedidos',
        loadChildren: () => import('./pedidos/pedidos.module').then( m => m.PedidosPageModule)
      },
      {
        path: 'graficas',
        loadChildren: () => import('./graficas/graficas.module').then( m => m.GraficasPageModule)
      }
    ]
  },
  {
    path: 'aniadir-producto',
    loadChildren: () => import('./aniadir-producto/aniadir-producto.module').then( m => m.AniadirProductoPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'crear-pedido',
    loadChildren: () => import('./crear-pedido/crear-pedido.module').then( m => m.CrearPedidoPageModule)
  },
  {
    path: '**',
    redirectTo: '/login-almagest',
    pathMatch: 'full'
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
