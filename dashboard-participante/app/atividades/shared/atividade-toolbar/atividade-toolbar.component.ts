import { Component } from '@angular/core';
import { SidenavService } from '../../../core/sidenav/sidenav.service';
import { MediaStateService } from '../../../core/media-state.service';
import { Subscription } from 'rxjs/Subscription';
import { SearchInputComponent } from '../../../shared/search-input/search-input.component';


@Component ({
	moduleId: module.id,
	selector: 'atividade-toolbar',
	templateUrl: 'atividade-toolbar.component.html',
	styleUrls: ['atividade-toolbar.component.css'],
})

export class AtividadeToolbarComponent  {

	public selectedFilter = "Semana";

	constructor(private sidenavService: SidenavService, private mediaState: MediaStateService) {}

	isSearchOpen = false;
	state = "" ;
	mediaSubscription: Subscription;

	ngOnInit() {
		this.mediaSubscription = this.mediaState.state$.subscribe(state => {
			this.state = state;
		})
		
	}

	ngOnDestroy() {
		this.mediaSubscription.unsubscribe();
	}

	setIsSearchOpen(value: boolean) {
		this.isSearchOpen = value;
	}

	toggleVisao(): void {
		if (this.selectedFilter == 'Dia')
			this.selectedFilter = 'Semana'
		else
			this.selectedFilter = 'Dia'
	}
  }
  