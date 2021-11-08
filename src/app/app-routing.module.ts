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
      },
      {
          path: 'tab2',
          loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
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
    path: '**',
    redirectTo: '/login-almagest',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
