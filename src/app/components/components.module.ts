import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';
import { ContenidoPedidoComponent } from './contenido-pedido/contenido-pedido.component';


@NgModule({
  declarations: [
    ListaPedidosComponent,
    ContenidoPedidoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListaPedidosComponent,
    ContenidoPedidoComponent
  ]
})
export class ComponentsModule { }
