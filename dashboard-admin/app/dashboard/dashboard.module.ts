import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CoreModule } from './core/core.module';
import { AtividadesModule} from './atividades/atividades.module';
import { AuthGuard } from '../auth/auth-guard.service';


@NgModule({
  imports: [
    HttpModule,
    SharedModule,
    DashboardRoutingModule,
    CoreModule,
    AtividadesModule
  ],
  declarations: [
    DashboardComponent
  ],
  providers: [AuthGuard]
})
export class DashboardModule { }
