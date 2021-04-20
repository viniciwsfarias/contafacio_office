import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCertPage } from './modal-cert.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCertPageRoutingModule {}
