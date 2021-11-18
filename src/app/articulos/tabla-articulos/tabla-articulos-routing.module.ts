import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablaArticulosPage } from './tabla-articulos.page';

const routes: Routes = [
  {
    path: '',
    component: TablaArticulosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablaArticulosPageRoutingModule {}
