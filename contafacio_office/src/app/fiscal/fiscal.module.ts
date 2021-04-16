import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiscalPageRoutingModule } from './fiscal-routing.module';

import { FiscalPage } from './fiscal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiscalPageRoutingModule
  ],
  declarations: [FiscalPage]
})
export class FiscalPageModule {}
