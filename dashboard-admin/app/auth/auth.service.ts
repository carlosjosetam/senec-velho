import { Injectable, OnInit, Inject } from '@angular/core';
import { AngularFire, FirebaseAuthState, AuthMethods, AuthProviders } from 'angularfire2';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  public state: FirebaseAuthState;

  constructor(private angularFireService: AngularFire, private router: Router) {

  }

  public redirectURL = "";

  loginEmail(email: string, password: string) {
    return this.angularFireService.auth.login({
        email: email,
        password: password,
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      })
      .then( () => {
        this.angularFireService.auth.subscribe ( (authState: any) => {
        this.state = authState;
        if (!this.state) {
          this.router.navigate(['/login']);
        }
      });
    });
  }

  logout() {
    return this.angularFireService.auth.logout()
  }

  isLogged():boolean {
    return this.state != null;
  }


}
