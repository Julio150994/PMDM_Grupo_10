import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatalogosPageRoutingModule } from './catalogos-routing.module';

import { CatalogosPage } from './catalogos.page';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogosPageRoutingModule,
    PipesModule
  ],
  declarations: [CatalogosPage]
})
export class CatalogosPageModule {}
