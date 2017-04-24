import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import {MdCardModule} from '@angular/material';




import { AtividadeService } from '../shared/atividade.service';
import { Atividade } from '../shared/atividade.model';

import 'rxjs/add/operator/switchMap';

@Component({
	moduleId: module.id,
	selector: 'atividade-detail-card',
	templateUrl: 'atividade-detail-card.component.html',
	styleUrls: ['atividade-detail-card.component.css']

})
	
export class AtividadeDetailCardComponent implements OnInit {

	tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

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

	getCardColor(): string {
	    const colorMap = {
	      "Palestra": "palestra",
	      "Workshop": "workshop",
	      "Visita técnica": "visita",
	      "Outros": "outros"
	    }
	    if (colorMap[this.atividade.tipo]) return colorMap[this.atividade.tipo];
	    return null;
	}

	goBack(): void {
		this.location.back();
	}

	likeMe(atividade: Atividade): void {
		this.atividade.confirmed = !this.atividade.confirmed;
	}

	save(): void {
  		this.atividadeService.update(this.atividade)
    		.then(() => this.goBack());
	}


	@Input() 
	atividade: Atividade;
}