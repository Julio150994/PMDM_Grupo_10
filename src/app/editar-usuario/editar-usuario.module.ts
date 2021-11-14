import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarUsuarioPageRoutingModule } from './editar-usuario-routing.module';

import { EditarUsuarioPage } from './editar-usuario.page';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarUsuarioPageRoutingModule,
    ReactiveFormsModule,
    PipesModule
  ],
  declarations: [EditarUsuarioPage]
})
export class EditarUsuarioPageModule {}
