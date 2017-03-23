import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class MediaStateService {

	private stateSource = new BehaviorSubject<string>("");

	state$ = this.stateSource.asObservable();

	changeState(newState: string) {
		this.stateSource.next(newState);
	}

}