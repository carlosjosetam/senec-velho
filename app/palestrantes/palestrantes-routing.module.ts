import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PalestrantesComponent } from './palestrantes.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'palestrantes', component: PalestrantesComponent }
  ])],
  exports: [RouterModule]
})
export class PalestrantesRoutingModule {}