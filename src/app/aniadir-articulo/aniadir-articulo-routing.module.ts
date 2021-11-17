import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AniadirArticuloPage } from './aniadir-articulo.page';

const routes: Routes = [
  {
    path: '',
    component: AniadirArticuloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AniadirArticuloPageRoutingModule {}
