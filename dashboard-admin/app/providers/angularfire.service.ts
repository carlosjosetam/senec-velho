import { Injectable, OnInit, Inject } from '@angular/core';
import { AngularFire, FirebaseAuthState, AuthMethods, AuthProviders } from 'angularfire2';

@Injectable()
export class AngularFireService {

  public state: FirebaseAuthState;

  constructor(public angularFireService: AngularFire) {

  }

  public redirectURL = "";

  registrarUser(email: string, password: string) {
    return this.angularFireService.auth.createUser({
      email: email,
      password: password
    });
  }

  registrarAdmin(uid: string, nome: string, email: string) {
    return this.angularFireService.database.object('admins/' + uid).set({
      nome: nome,
      email: email,
    });
  }

  loginEmail(email: string, password: string) {
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

  getAdmin(uid: string) {
    return this.angularFireService.database.object('admins/' + uid);
  }
}
