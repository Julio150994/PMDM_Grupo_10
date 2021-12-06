import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';
import { ContenidoPedidoComponent } from './contenido-pedido/contenido-pedido.component';
import { IonCardComponent} from './ion-card/ion-card.component';


@NgModule({
  declarations: [
    ListaPedidosComponent,
    ContenidoPedidoComponent,
    IonCardComponent,
  ],
  imports: [
    CommonModule,
    IonCardComponent
  ],
  exports: [
    ListaPedidosComponent,
    ContenidoPedidoComponent,
    IonCardComponent,
  ]
})
export class ComponentsModule { }
