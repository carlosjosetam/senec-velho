import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './not-found.component';
//import { PalestrantesComponent } from './palestrantes/palestrantes.component';
export const routes: Routes = [

 // { path: 'palestrantes', component: PalestrantesComponent },
  { path: '', redirectTo: 'atividades', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}