import { Injectable } from '@angular/core';
import {  CanActivate, Router,  ActivatedRouteSnapshot,  RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private angularFire: AuthService, private router: Router ) {
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
