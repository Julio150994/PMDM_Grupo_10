import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AniadirProductoPage } from './aniadir-producto.page';

const routes: Routes = [
  {
    path: '',
    component: AniadirProductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AniadirProductoPageRoutingModule {}
