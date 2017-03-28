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

  private nome: string;
  private email: string;
  private password: string;

  login() {
    this.angularFire.loginEmail(this.email, this.password).then((data: any) => {
      this.router.navigate([this.angularFire.redirectURL]);
    })
  }

  registrar() {
    this.angularFire.registrarUser(this.email, this.password).then((user) => {
      this.angularFire.registrarAdmin(user.uid, this.nome, this.email).then(() => {
        this.login();
      })
    });
  }

  logout() {
    this.angularFire.logout();
  }

}
