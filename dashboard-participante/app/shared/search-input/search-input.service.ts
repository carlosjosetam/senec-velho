import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class SearchInputService {

	private searchTermSource = new BehaviorSubject<string>("");

	searchTerm$ = this.searchTermSource.asObservable();

	updateTerm(newTerm: string) {
		this.searchTermSource.next(newTerm);
	}

}