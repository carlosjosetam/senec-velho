import { Injectable, OnInit, Inject } from '@angular/core';
import { AngularFire, FirebaseAuthState, AuthMethods, AuthProviders } from 'angularfire2';

@Injectable()
export class AngularFireService {

  public state: FirebaseAuthState;

  constructor(public angularFireService: AngularFire) {

  }

  public redirectURL = "";

  registerUser(email: string, password: string) {
    return this.angularFireService.auth.createUser({
      email: email,
      password: password
    });
  }

  loginWithEmail(email: string, password: string) {
    return this.angularFireService.auth.login({
        email: email,
        password: password,
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      });
  }

  logout() {
    return this.angularFireService.auth.logout();

  }

  isLogged():boolean {
    console.log(this.state);
    return this.state != null;
  }
}
