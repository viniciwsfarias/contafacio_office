import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { CertiService } from 'src/app/servico/certi.service';

@Component({
  selector: 'app-modal-cert',
  templateUrl: './modal-cert.page.html',
  styleUrls: ['./modal-cert.page.scss'],
})
export class ModalCertPage implements OnInit {

  constructor(private modalCtrl: ModalController, private service: CertiService) { }

  ngOnInit() {
  }
  fecharModal(){
    this.modalCtrl.dismiss();
  }
  enviando(form: NgForm){
    console.log(form.value);
    const cert = form.value;
    this.service.create(cert).subscribe(response => {
      this.modalCtrl.dismiss();
    });
  }

}
