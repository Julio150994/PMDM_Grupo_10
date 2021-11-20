import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniasPipe } from './companias.pipe';
import { UsersPipe } from './users.pipe';
import { BuscadorPipe } from './buscador.pipe';


@NgModule({
  declarations: [CompaniasPipe, UsersPipe, BuscadorPipe],
  exports: [CompaniasPipe, UsersPipe, BuscadorPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
