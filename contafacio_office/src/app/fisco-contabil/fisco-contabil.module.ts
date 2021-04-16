import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiscoContabilPageRoutingModule } from './fisco-contabil-routing.module';

import { FiscoContabilPage } from './fisco-contabil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiscoContabilPageRoutingModule
  ],
  declarations: [FiscoContabilPage]
})
export class FiscoContabilPageModule {}
