import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtividadesComponent } from './atividades.component';
import { AtividadeDetailComponent } from './atividade-detail/atividade-detail.component';
import { AuthGuard } from '../../auth-guard.service';

const atividadesRoutes: Routes = [
  {
    path: 'atividades',
    component: AtividadesComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'atividades/:id',
    component: AtividadeDetailComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [RouterModule.forChild(atividadesRoutes)],
  exports: [RouterModule]
})
export class AtividadesRoutingModule {}
