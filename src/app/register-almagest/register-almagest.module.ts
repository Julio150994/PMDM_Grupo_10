import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterAlmagestPageRoutingModule } from './register-almagest-routing.module';

import { RegisterAlmagestPage } from './register-almagest.page';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterAlmagestPageRoutingModule,
    ReactiveFormsModule,
    PipesModule
  ],
  declarations: [RegisterAlmagestPage]
})
export class RegisterAlmagestPageModule {}
