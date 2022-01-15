import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPageRoutingModule } from './modal-routing.module';

import { ModalPage } from './modal.page';
import { CrearPedidoPage } from '../crear-pedido/crear-pedido.page';
import { CrearPedidoPageModule } from '../crear-pedido/crear-pedido.module';


@NgModule({
  entryComponents: [CrearPedidoPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPageRoutingModule,
    CrearPedidoPageModule
  ],
  declarations: [ModalPage]
})
export class ModalPageModule {}
