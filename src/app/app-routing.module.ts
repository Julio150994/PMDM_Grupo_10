import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';


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
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: '**',
    redirectTo: '/login-almagest',
    pathMatch: 'full'
  },  {
    path: 'catalogos',
    loadChildren: () => import('./catalogos/catalogos.module').then( m => m.CatalogosPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
