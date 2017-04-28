import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';
import { SearchInputService } from '../../shared/search-input/search-input.service';



import { AtividadeService } from '../shared/atividade.service';
import { Atividade } from '../shared/atividade.model';

import 'rxjs/add/operator/switchMap';

@Component({
	moduleId: module.id,
	selector: 'atividade-detail',
	templateUrl: 'atividade-detail.component.html'
})
	
export class AtividadeDetailComponent implements OnInit {

	private atividades: Atividade[];
	private atividadesFiltradas: Atividade[]
	private loading: boolean = false;
	private selectedVisible = "none";
	private selectedFilter = "SEG";
	private searchSubscription: Subscription;

	constructor(
		private atividadeService: AtividadeService,
		private route: ActivatedRoute,
		private location: Location
	) {}


	getAtividades(): void {
    this.atividadeService.getAtividades().then(atividades => {
      this.atividades = atividades.sort(this.compare);
      this.loading = false;
      this.atividadesFiltradas = this.atividades.slice();
      
    });
  }


	setSEG(): void {
		
	}

	compare(a: Atividade,b: Atividade) {
    if (a.inicioAtividade < b.inicioAtividade) return -1;
    if (a.inicioAtividade > b.inicioAtividade) return 1;
    return 0;
  } 

	ngOnInit(): void {

		this.getAtividades();

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