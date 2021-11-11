import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import { EditarUsuarioPage } from './editar-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: EditarUsuarioPage
  }
];

@NgModule({
  imports: [ReactiveFormsModule,RouterModule.forChild(routes)],
  exports: [RouterModule,ReactiveFormsModule],
})
export class EditarUsuarioPageRoutingModule {}
