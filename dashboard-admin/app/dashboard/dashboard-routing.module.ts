import { NgModule } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AtividadesComponent } from './atividades/atividades.component';
import { AtividadeDetailComponent } from './atividades/atividade-detail/atividade-detail.component';
import { AuthGuard } from '../auth/auth-guard.service';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'atividades',
        pathMatch: 'full'
      },
      {
        path: 'atividades',
        component: AtividadesComponent
      },
      {
        path: 'atividades/:id',
        component: AtividadeDetailComponent
      }
    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule {

}
