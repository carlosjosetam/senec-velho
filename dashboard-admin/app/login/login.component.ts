import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireService } from '../providers/angularfire.service';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent {
  constructor(public angularFire: AngularFireService, private router: Router) {  }

  private email: string;
  private password: string;
  private hasError = false;
  private errorMessage = "";
  private loading = false;

  login() {
    this.hasError = false;
    this.loading = true;

    this.angularFire.loginEmail(this.email, this.password).then((data: any) => {
      this.loading = false;
      this.router.navigate([this.angularFire.redirectURL]);
    })
    .catch((error: any) => {
      this.hasError = true;
      this.loading = false;
      switch(error.code) {
        case 'auth/user-not-found': {
          this.errorMessage = "Esse e-mail não foi encontrado em nosso sistema :(";
          break;
        }
        case 'auth/wrong-password': {
          this.errorMessage = "Senha incorreta :(";
          break;
        }
        case 'auth/network-request-failed': {
          this.errorMessage = "Parece haver um problema com a sua conexão :(";
          break;
        }
        case 'auth/invalid-email': {
          this.errorMessage = "Parece que você digitou um endereço de e-mail invalido :(";
          break;
        }
        default: {
          this.errorMessage = "Desculpe, houve um erro na hora de autenticar sua conta :(";
        }
      }
    });
  }

  /*registrar() {
    this.angularFire.registrarUser(this.email, this.password).then((user) => {
      this.angularFire.registrarAdmin(user.uid, this.nome, this.email).then(() => {
        this.login();
      })
    });
  }*/

}
