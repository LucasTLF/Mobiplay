import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'noticia',
        loadChildren: () => import('./noticia/noticia.module').then(m => m.NoticiaPageModule)
      },
      {
        path: 'conta',
        loadChildren: () => import('./conta/conta.module').then(m => m.ContaPageModule)
      },
      {
        path: 'sobre',
        loadChildren: () => import('./sobre/sobre.module').then(m => m.SobrePageModule)
      },
      {
        path: 'conquista',
        loadChildren: () => import('./conquista/conquista.module').then(m => m.ConquistaPageModule)
      },

    ]
  },

  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then(m => m.CadastroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
