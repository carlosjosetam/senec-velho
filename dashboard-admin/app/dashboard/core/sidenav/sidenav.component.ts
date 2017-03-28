import { Component, OnInit } from '@angular/core';
import { AngularFireService } from '../../../providers/angularfire.service';
import { FirebaseObjectObservable } from 'angularfire2';

@Component ({
	moduleId: module.id,
	selector: 'sidenav',
	templateUrl: 'sidenav.component.html',
	styleUrls: ['sidenav.component.css'],
})

export class SidenavComponent implements OnInit {

	constructor(public angularFire: AngularFireService) {	}

	private nome: FirebaseObjectObservable<any>;
	private email: FirebaseObjectObservable<any>;
	
	ngOnInit() {
		this.nome = this.angularFire.getAdmin(this.angularFire.state.uid);
	}
	menuItems = [
		{'descricao': 'Atividades', 'link': 'atividades', 'icon': 'dashboard', 'category':'', 'disabled': false},
		{'descricao': 'Participantes', 'link': 'participantes', 'icon': 'school','category':'', 'disabled': true },
		{'descricao': 'Administradores', 'link': 'administradores','icon': 'assignment_ind','category':'', 'disabled': true},
		{'descricao': 'Cadastros', 'link': 'analytics/cadastros','icon': 'trending_up','category':'Analytics', 'disabled': true},
		{'descricao': 'Dados de Acesso', 'link': 'analytics/acesso','icon': 'swap_vert','category':'Analytics', 'disabled': true},
		{'descricao': 'Segurança', 'link': 'admin/seguranca','icon': 'security','category':'Conta', 'disabled': true},
	];
}
