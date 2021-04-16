import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContabilPage } from './contabil.page';

const routes: Routes = [
  {
    path: '',
    component: ContabilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContabilPageRoutingModule {}
