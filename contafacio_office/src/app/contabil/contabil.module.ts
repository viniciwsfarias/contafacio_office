import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContabilPageRoutingModule } from './contabil-routing.module';

import { ContabilPage } from './contabil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContabilPageRoutingModule
  ],
  declarations: [ContabilPage]
})
export class ContabilPageModule {}
