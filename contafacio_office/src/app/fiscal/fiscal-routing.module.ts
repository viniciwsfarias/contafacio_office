import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiscalPage } from './fiscal.page';

const routes: Routes = [
  {
    path: '',
    component: FiscalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiscalPageRoutingModule {}
