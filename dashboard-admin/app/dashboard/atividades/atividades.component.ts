import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaStateService } from '../../core/media-state.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  moduleId: module.id,
  selector: 'atividades',
  templateUrl: 'atividades.component.html'
})

export class AtividadesComponent implements OnInit, OnDestroy {

	constructor(private mediaState: MediaStateService) { }

	state = "" ;
	subscription: Subscription;

	ngOnInit() {
		this.subscription = this.mediaState.state$.subscribe(state => {
			this.state = (state == "lg") ? "grid" : "list";
		})
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}


}
