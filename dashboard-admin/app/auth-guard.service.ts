import { Injectable } from '@angular/core';
import {  CanActivate, Router,  ActivatedRouteSnapshot,  RouterStateSnapshot } from '@angular/router';
import { AngularFireService } from './providers/angularfire.service';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private angularFire: AngularFireService, private router: Router ) {
      this.angularFire.angularFireService.auth.subscribe ( (authState: any) => {
        this.angularFire.state = authState;
      });
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      let url: string = state.url;
      return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
      if (this.angularFire.isLogged()) return true;

      this.angularFire.redirectURL = url;

      this.router.navigate(['/login']);

      return false;
    }
}
