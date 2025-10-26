import { Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { Feed } from './pages/feed/feed';
import { Detalhes } from './pages/detalhes/detalhes';
import { CadastroPromocao } from './pages/cadastro-promocao/cadastro-promocao';
import { MinhasPromocoes } from './pages/minhas-promocoes/minhas-promocoes';
import { Favoritos } from './pages/favoritos/favoritos';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'feed', component: Feed },
  { path: 'detalhes/:id', component: Detalhes },
  { path: 'cadastro', component: CadastroPromocao },
  { path: 'minhas-promocoes', component: MinhasPromocoes },
  { path: 'favoritos', component: Favoritos }
];