import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosPage } from './usuarios.page';

const routes: Routes = [
  {
    path: 'usuarios',
    component: UsuariosPage,
    children: [
      {
        path: 'catalogos',
        loadChildren: () => import('../catalogos/catalogos.module').then(m => m.CatalogosPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosPageRoutingModule {}
