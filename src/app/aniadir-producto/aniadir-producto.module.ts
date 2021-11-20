import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AniadirProductoPageRoutingModule } from './aniadir-producto-routing.module';

import { AniadirProductoPage } from './aniadir-producto.page';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AniadirProductoPageRoutingModule,
    ReactiveFormsModule,
    PipesModule
  ],
  declarations: [AniadirProductoPage]
})
export class AniadirProductoPageModule {}
