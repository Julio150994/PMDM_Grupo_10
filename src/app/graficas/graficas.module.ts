import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraficasPageRoutingModule } from './graficas-routing.module';

import { GraficasPage } from './graficas.page';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraficasPageRoutingModule,
    NgChartsModule
  ],
  declarations: [GraficasPage]
})
export class GraficasPageModule {}
