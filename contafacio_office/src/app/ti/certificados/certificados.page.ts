import { HttpClientModule } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Cert, CertiService } from 'src/app/servico/certi.service';
import { NgForm } from '@angular/forms';
import { ModalCertPage } from './modal-cert/modal-cert.page';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.page.html',
  styleUrls: ['./certificados.page.scss'],
})


export class CertificadosPage implements OnInit {
cert: Cert[];
msg : any;
cores = "";
cor: any;
mail: any;
certi : any[] = [];

  certification : any[] = [];
  
  
  constructor(private alertctrl: AlertController, private toastCtrl: ToastController, private service: CertiService, 
    private modalCtrl: ModalController) {
    let certificadoJson = localStorage.getItem('certificadosDb');

    if(certificadoJson != null){
      this.certification = JSON.parse(certificadoJson);
    }

   }


  ngOnInit() {
     this.service.getAll().subscribe(response => {
      this.cert = response;
    });

this.carregar();
//this.mudarCor();

  }

  async alert() {

    const alert = await this.alertctrl.create({
      header: 'Alert',
      subHeader: 'subtitle',
      message: 'Excluido com sucesso!',
      buttons: ['SIM', 'NÃO']
    });

    alert.present();
  }

  async confirm() {
    const alert = await this.alertctrl.create({
      header: 'Confirm!',
      message: 'Tem certeza que quer excluir?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancelar',
          cssClass: 'Secondary',
          handler: (blah) => {
            console.log('Confirm cancel: blah');
          }
        }, {
          text: 'Sim',
          handler: () => {
            console.log('confirm Okay');
          }
        }
      ]
    });
    alert.present();
  }

  newCert(){
    this.modalCtrl.create({
      component: ModalCertPage
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then(({data}) =>{
      //console.log(data);
      this.service.getAll().subscribe(response => {
        this.cert = response;
      })
    })
    
  }

  remove(id: any){
    this.service.remove(id).subscribe(() => {
     // this.cert = this.cert.filter(idcert => idcert.id ! == id);
     this.service.getAll().subscribe(response => {
      this.cert = response;
      //this.confirm();
     })
    })
  }

  enviarEmail(id: any, email: any){
    this.service.getId(id, email)
    .then((json) => {
      this.msg = (json);
      console.log(json);
    })
  }
  carregar(){
    return new Promise(resolve => {
     
      this.service.getAll().subscribe((response) => {
        this.certi = response;
        this.certi.push(this.certi);
        console.log(this.certi);
        resolve(true);
        let mail = [];
      for(let i = 0; i < response.length; i++){
        mail.push({
          "id" : response[i].id,
          "dias" : response[i].dias,
          "email": response[i].email
          
        })
        let id = response[i].id;
        let dias = response[i].dias;
        let email = response[i].email;
        if(dias < 10){
          this.enviarEmail(id, email);
        }
      }
      })
      
    })
  }
 
}
