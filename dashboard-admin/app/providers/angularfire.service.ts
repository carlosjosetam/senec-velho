import { Injectable, OnInit, Inject } from '@angular/core';
import { AngularFire, FirebaseAuthState, AuthMethods, AuthProviders } from 'angularfire2';

@Injectable()
export class AngularFireService {

  public state: FirebaseAuthState;

  constructor(public angularFireService: AngularFire) {

  }

  public redirectURL = "";

  loginWithGoogle() {
    return this.angularFireService.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });
  }

  logout() {
    return this.angularFireService.auth.logout();

  }

  isLogged():boolean {
    return this.state != null;
  }
}
