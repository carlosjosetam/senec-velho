import { Injectable } from '@angular/core';
import {  CanActivate, Router,  ActivatedRouteSnapshot,  RouterStateSnapshot } from '@angular/router';
import { AngularFireService } from './providers/angularfire.service';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private angularFire: AngularFireService, private router: Router ) {
      this.angularFire.angularFireService.auth.subscribe ( (authState: any) => {
        this.angularFire.state = authState;
        console.log(authState);
      });
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      let url: string = state.url;
      return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
      console.log("guard");
      console.log(this.angularFire.state);
      if (this.angularFire.isLogged()) return true;

      console.log("false");
      this.angularFire.redirectURL = url;

      this.router.navigate(['/login']);

      return false;
    }
}
