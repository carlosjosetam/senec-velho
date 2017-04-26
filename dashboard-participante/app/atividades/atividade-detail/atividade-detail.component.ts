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
      this.searchSubscription = this.searchTerm.searchTerm$.subscribe(value => {
        this.atividadesFiltradas = this.atividades.filter(a => {
          let valueLower = value.toLowerCase();
          let titulo = a.titulo.toLowerCase();
          if (titulo.indexOf(valueLower) != -1) {
            return true;
          }
        });
      })
    });
  }


	setSEG(): void {
		
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