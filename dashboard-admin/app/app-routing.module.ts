import { NgModule }              from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { PageNotFoundComponent } from './not-found.component';
import { AuthGuard }             from './auth/auth-guard.service';

export const routes: Routes = [

  {
    path:'login',
    redirectTo: 'login'
  },

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },


  { path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
