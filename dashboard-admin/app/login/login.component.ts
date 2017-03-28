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

  private email: string;
  private password: string;

  login() {
    this.angularFire.loginWithEmail(this.email, this.password).then((data: any) => {
      this.router.navigate([this.angularFire.redirectURL]);
    })
  }

  register() {
    this.angularFire.registerUser(this.email, this.password).then((data) => {
      console.log(data);
    });
  }

  logout() {
    this.angularFire.logout();
  }

}
