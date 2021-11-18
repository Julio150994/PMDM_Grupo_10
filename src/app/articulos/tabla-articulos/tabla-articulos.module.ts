import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TablaArticulosPageRoutingModule } from './tabla-articulos-routing.module';

import { TablaArticulosPage } from './tabla-articulos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TablaArticulosPageRoutingModule
  ],
  declarations: [TablaArticulosPage]
})
export class TablaArticulosPageModule {}
