import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiPage } from './ti.page';

const routes: Routes = [
  {
    path: '',
    component: TiPage
  },
  {
    path: 'certificados',
    loadChildren: () => import('./certificados/certificados.module').then( m => m.CertificadosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiPageRoutingModule {}
