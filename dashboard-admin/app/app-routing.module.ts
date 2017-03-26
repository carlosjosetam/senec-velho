import { NgModule }              from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { PageNotFoundComponent } from './not-found.component';
import { AuthGuard }             from './auth-guard.service';

export const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    redirectTo: 'atividades',
    pathMatch: 'full'
  },
  { path: '**',
    component: PageNotFoundComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
