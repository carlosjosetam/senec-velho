import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtividadesComponent } from './atividades.component';
import { AtividadeDetailComponent } from './atividade-detail/atividade-detail.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'atividades', component: AtividadesComponent },
    { path: 'atividades/:id', component: AtividadeDetailComponent }
  ])],
  exports: [RouterModule]
})
export class AtividadesRoutingModule {}