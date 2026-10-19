import { Routes } from '@angular/router';
import { Dashboard } from './components/pages/dashboard/dashboard';
import { CadastroClientes } from './components/pages/cadastro-clientes/cadastro-clientes';
import { ConsultaClientes } from './components/pages/consulta-clientes/consulta-clientes';
import { EdicaoClientes } from './components/pages/edicao-clientes/edicao-clientes';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: Dashboard,
  },
  {
    path: 'cadastro-clientes',
    component: CadastroClientes,
  },
  {
    path: 'consulta-clientes',
    component: ConsultaClientes,
  },
  {
    path: 'edicao-clientes',
    component: EdicaoClientes,
  },
  {
    path: '', 
    pathMatch: 'full', 
    redirectTo: '/dashboard',
  }
];
