import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniasPipe } from './companias.pipe';
import { UsersPipe } from './users.pipe';


@NgModule({
  declarations: [CompaniasPipe, UsersPipe],
  exports: [CompaniasPipe, UsersPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
