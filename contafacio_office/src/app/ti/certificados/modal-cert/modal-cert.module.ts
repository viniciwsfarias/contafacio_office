import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCertPageRoutingModule } from './modal-cert-routing.module';

import { ModalCertPage } from './modal-cert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCertPageRoutingModule
  ],
  declarations: [ModalCertPage]
})
export class ModalCertPageModule {}
