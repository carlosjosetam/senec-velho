import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { AtividadeService } from '../shared/atividade.service';
import { Atividade } from '../shared/atividade.model';

import 'rxjs/add/operator/switchMap';

@Component({
	moduleId: module.id,
	selector: 'atividade-detail',
	templateUrl: 'atividade-detail.component.html'
})
	
export class AtividadeDetailComponent implements OnInit {

	loading: boolean = true;

	constructor(
		private atividadeService: AtividadeService,
		private route: ActivatedRoute,
		private location: Location
	) {}


	ngOnInit(): void {

		this.route.params
			.switchMap((params: Params) => this.atividadeService.getAtividade(+params['id']))
			.subscribe(atividade => {
				this.atividade = atividade;
				this.loading = false;
			});
	}

	goBack(): void {
		this.location.back();
	}

	save(): void {
  		this.atividadeService.update(this.atividade)
    		.then(() => this.goBack());
	}


	@Input() 
	atividade: Atividade;
}