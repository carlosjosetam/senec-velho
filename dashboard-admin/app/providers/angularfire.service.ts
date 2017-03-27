import { Injectable, OnInit, Inject } from '@angular/core';
import { AngularFire, FirebaseAuthState, AuthMethods, AuthProviders } from 'angularfire2';

@Injectable()
export class AngularFireService {

  public state: FirebaseAuthState;

  constructor(public angularFire: AngularFire) {
    this.angularFire.auth.subscribe ( (authState) => {
      this.state = authState;
    });
  }

  public redirectURL = "";

  loginWithGoogle() {
    return this.angularFire.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });
  }

  logout() {
    console.log("logout");
    return this.angularFire.auth.logout();

  }

  isLogged():boolean {
    console.log(this.state);
    return this.state != null;
  }
}
