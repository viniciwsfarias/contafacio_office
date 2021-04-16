import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'ti', url: 'ti', icon: 'desktop-outline' },
    { title: 'Pessoal', url: 'pessoal', icon: 'mail' },
    { title: 'Contabil', url: 'contabil', icon: 'paper-plane' },
    { title: 'Fiscal', url: 'fiscal', icon: 'heart' },
    { title: 'Fisco Contabil', url: 'fisco-contabil', icon: 'archive' },
    { title: 'Legalizacao', url: 'legalizacao', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
