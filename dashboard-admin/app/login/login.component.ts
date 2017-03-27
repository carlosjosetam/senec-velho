import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireService } from '../providers/angularfire.service';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html',
})

export class LoginComponent {
  constructor(public angularFire: AngularFireService, private router: Router) {  }

  login() {
    this.angularFire.loginWithGoogle().then((data) => {
      this.router.navigate([this.angularFire.redirectURL]);
    })
  }

  logout() {
    this.angularFire.logout();
  }

}
