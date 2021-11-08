import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginAlmagestPage } from './login-almagest.page';

const routes: Routes = [
  {
    path: '',
    component: LoginAlmagestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginAlmagestPageRoutingModule {}
