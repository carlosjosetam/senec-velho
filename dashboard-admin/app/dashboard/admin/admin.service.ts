import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Admin } from './admin.model';


@Injectable()

export class AdminService {

	private adminsUrl = '/admins';
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(public angularFireService: AngularFire) {}

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

  getAdmin(uid: string) {
    return this.angularFireService.database.object('admins/' + uid);
  }

}
