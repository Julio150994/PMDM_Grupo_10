import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginAlmagestPageRoutingModule } from './login-almagest-routing.module';

import { LoginAlmagestPage } from './login-almagest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginAlmagestPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LoginAlmagestPage]
})
export class LoginAlmagestPageModule {}
