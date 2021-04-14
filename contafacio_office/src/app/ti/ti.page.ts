import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ti',
  templateUrl: './ti.page.html',
  styleUrls: ['./ti.page.scss'],
})
export class TiPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  showCertificados(){
    this.navCtrl.navigateForward('certificados')
  }

}
