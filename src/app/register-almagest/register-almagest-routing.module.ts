import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterAlmagestPage } from './register-almagest.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterAlmagestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterAlmagestPageRoutingModule {}
