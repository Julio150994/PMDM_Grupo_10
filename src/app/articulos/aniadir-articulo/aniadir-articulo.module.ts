import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AniadirArticuloPageRoutingModule } from './aniadir-articulo-routing.module';

import { AniadirArticuloPage } from './aniadir-articulo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AniadirArticuloPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AniadirArticuloPage]
})
export class AniadirArticuloPageModule {}
