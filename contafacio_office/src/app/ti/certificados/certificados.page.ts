import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.page.html',
  styleUrls: ['./certificados.page.scss'],
})
export class CertificadosPage implements OnInit {

  certificados : any[] = [];

  constructor(private alertctrl: AlertController, private toastCtrl: ToastController) {
    let certificadoJson = localStorage.getItem('certificadosDb');

    if(certificadoJson != null){
      this.certificados = JSON.parse(certificadoJson);
    }

   }


  ngOnInit() {
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
  async showNew() {
    const showNew = await this.alertctrl.create({
      header: 'Cadastro de Certificados',
      inputs: [
        {
          name: 'newCertificado',
          type: 'text',
          placeholder: 'Certificados'
        },
        {
          name: 'cnpj',
          type: 'text',
          placeholder: 'CNPJ'
        },
        {
          name: 'email',
          type: 'text',
          placeholder: 'email'
        },
        {
          name: 'vencimento',
          type: 'date',
          placeholder: 'Vencimento'
        },
        {
          name: 'situacao',
          type: 'text',
          placeholder: 'Situação'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Salvar',
          handler: (data) => {
            console.log(data.newCertificado);
            console.log(data.cnpj);
            this.add(data.newCertificado, data.cnpj, data.email, data.vencimento, data.situacao);
            
          }
        }
      ]
    });
    showNew.present();
  }
  async add(newCertificado: string, cnpj: string, email:string, vencimento: Date, situacao: string) {
    //valida se o usuario preencheu o campo
    if (newCertificado.trim().length < 1) {
      const toast = await this.toastCtrl.create({
        message: 'Por favor, preencher campo.',
        duration: 2000,
        position: 'top'
      });
      toast.present();
      return;
    }

    let certificado = {name: newCertificado, cnpj: cnpj, email: email, vencimento: vencimento, situacao: situacao, done: false};
    this.certificados.push(certificado);
    this.updateLocalStorage();
  }

  updateLocalStorage(){
    localStorage.setItem('certificadosDb',JSON.stringify(this.certificados));
  }

  delete(certificado : any){
    this.certificados = this.certificados.filter(certificadoArray=> certificado != certificadoArray)
    this.updateLocalStorage();
  }
}
