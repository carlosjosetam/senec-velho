import { Component, OnInit } from '@angular/core';

@Component ({
	moduleId: module.id,
	selector: 'sidenav',
	templateUrl: 'sidenav.component.html',
	styleUrls: ['sidenav.component.css'],
})

export class SidenavComponent { 

	menuItems = [
		{'descricao': 'Cronograma', 'link': 'atividades', 'icon': 'dashboard', 'category':''},
		{'descricao': 'Minha SEnEC', 'link': 'minha-senec', 'icon': 'perm_contact_calendar','category':''},
		{'descricao': 'Meu Perfil', 'link': 'perfil','icon': 'people','category':'Conta'},
		{'descricao': 'Segurança', 'link': 'seguranca','icon': 'security','category':'Conta'},
	];
}