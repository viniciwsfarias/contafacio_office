import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TiPageRoutingModule } from './ti-routing.module';

import { TiPage } from './ti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TiPageRoutingModule
  ],
  declarations: [TiPage]
})
export class TiPageModule {}
