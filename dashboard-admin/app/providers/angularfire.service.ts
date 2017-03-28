import { Injectable, OnInit, Inject } from '@angular/core';
import { AngularFire, FirebaseAuthState, AuthMethods, AuthProviders } from 'angularfire2';
import { Router } from '@angular/router';

@Injectable()
export class AngularFireService {

  public state: FirebaseAuthState;

  constructor(public angularFireService: AngularFire, private router: Router) {

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

  getAdmin(uid: string) {
    return this.angularFireService.database.object('admins/' + uid);
  }
}
