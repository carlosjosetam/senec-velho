import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Atividade } from './atividade.model';


@Injectable()

export class AtividadeService {

	private atividadesUrl = 'api/atividades';
	private headers = new Headers({'Content-Type': 'application/json'});
	constructor(private http: Http) {}

	getAtividades(): Promise<Atividade[]> {
		return this.http.get(this.atividadesUrl)
			.toPromise()
			.then(response => response.json().data as Atividade[])
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error ocurred', error);
		return Promise.reject(error.message || error);
	}

	getAtividade(id : number): Promise<Atividade> {
		const url = `${this.atividadesUrl}/${id}`;
		return this.http.get(url)
			.toPromise()
			.then(response => response.json().data as Atividade)
			.catch(this.handleError);
	}

	update(atividade: Atividade): Promise<Atividade> {
		const url = `${this.atividadesUrl}/${atividade.id}`;
		return this.http
			.put(url, JSON.stringify(atividade), {headers: this.headers})
			.toPromise()
			.then(() => atividade)
			.catch(this.handleError);
	}
	create(titulo: string): Promise<Atividade> {
  		return this.http
		    .post(this.atividadesUrl, JSON.stringify({titulo: titulo}), {headers: this.headers})
		    .toPromise()
		    .then(res => res.json().data)
		    .catch(this.handleError);
	}

	delete(id: string): Promise<void> {
	 	const url = `${this.atividadesUrl}/${id}`;
	  		return this.http.delete(url, {headers: this.headers})
	    	.toPromise()
	    	.then(() => null)
	    	.catch(this.handleError);
	}

}