import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'ti',
    loadChildren: () => import('./ti/ti.module').then( m => m.TiPageModule)
  },
  {
    path: 'certificados',
    loadChildren: () => import('./ti/certificados/certificados.module').then( m => m.CertificadosPageModule)
  },
  {
    path: 'pessoal',
    loadChildren: () => import('./pessoal/pessoal.module').then( m => m.PessoalPageModule)
  },
  {
    path: 'contabil',
    loadChildren: () => import('./contabil/contabil.module').then( m => m.ContabilPageModule)
  },
  {
    path: 'fiscal',
    loadChildren: () => import('./fiscal/fiscal.module').then( m => m.FiscalPageModule)
  },
  {
    path: 'fisco-contabil',
    loadChildren: () => import('./fisco-contabil/fisco-contabil.module').then( m => m.FiscoContabilPageModule)
  },
  {
    path: 'legalizacao',
    loadChildren: () => import('./legalizacao/legalizacao.module').then( m => m.LegalizacaoPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
