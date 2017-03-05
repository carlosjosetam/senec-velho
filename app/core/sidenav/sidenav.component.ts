import { Component, OnInit } from '@angular/core';

@Component ({
	selector: 'sidenav',
	templateUrl: 'sidenav.component.html',
	styleUrls: ['sidenav.component.css'],
})

export class SidenavComponent { 

	menuItems = [
		{'descricao': 'Atividades', 'link': 'atividades', 'icon': 'dashboard', 'category':''},
		{'descricao': 'Participantes', 'link': 'participantes', 'icon': 'school','category':''},
		{'descricao': 'Palestrantes', 'link': 'palestrantes','icon': 'people','category':''},
		{'descricao': 'Patrocinadores', 'link': 'patrocinadores','icon': 'work','category':''},
		{'descricao': 'Administradores', 'link': 'administradores','icon': 'assignment_ind','category':''},
		{'descricao': 'Cadastros', 'link': 'analytics/cadastros','icon': 'trending_up','category':'Analytics'},
		{'descricao': 'Dados de Acesso', 'link': 'analytics/acesso','icon': 'swap_vert','category':'Analytics'},
		{'descricao': 'Segurança', 'link': 'user/seguranca','icon': 'security','category':'Conta'},
	];
}