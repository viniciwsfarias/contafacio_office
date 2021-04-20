import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertificadosPage } from './certificados.page';

const routes: Routes = [
  {
    path: '',
    component: CertificadosPage
  },
  {
    path: 'modal-cert',
    loadChildren: () => import('./modal-cert/modal-cert.module').then( m => m.ModalCertPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificadosPageRoutingModule {}
