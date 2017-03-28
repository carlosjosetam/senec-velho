import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { SharedModule } from '../../shared/shared.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './shared/in-memory-data.service';
import { AtividadesComponent } from './atividades.component';
import { AtividadeGridComponent} from './atividade-grid/atividade-grid.component';
import { AtividadeDetailComponent } from './atividade-detail/atividade-detail.component';
import { AtividadeToolbarComponent } from './shared/atividade-toolbar/atividade-toolbar.component';
import { AtividadeCardComponent } from './shared/atividade-card/atividade-card.component';
import { VisibilityConfirmationComponent } from './shared/confirmation-dialogs/visibility-confirmation.component';
import { LockConfirmationComponent } from './shared/confirmation-dialogs/lock-confirmation.component';
import { AtividadeService } from './shared/atividade.service';
import { AuthGuard } from '../../auth/auth-guard.service';

@NgModule({

	imports: [
 	HttpModule,
	InMemoryWebApiModule.forRoot(InMemoryDataService),
  SharedModule
  ],

	declarations: [
		AtividadesComponent, AtividadeDetailComponent, AtividadeGridComponent, AtividadeToolbarComponent,
		AtividadeCardComponent, VisibilityConfirmationComponent, LockConfirmationComponent
	],
	entryComponents: [VisibilityConfirmationComponent, LockConfirmationComponent],
	providers: [ AtividadeService ],

})

export class AtividadesModule { }
