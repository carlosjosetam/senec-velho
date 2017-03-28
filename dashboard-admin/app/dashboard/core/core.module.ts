import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../../shared/shared.module';

import { RouterModule } from '@angular/router';

import { SidenavComponent} from './sidenav/sidenav.component';

import { MediaStateService } from './media-state.service';
import { SidenavService } from './sidenav/sidenav.service';
import { AdminService} from '../admin/admin.service';
// other imports
@NgModule({
  imports: [
  	CommonModule,
  	MaterialModule.forRoot(),
  	FlexLayoutModule.forRoot(),
  	SharedModule,
  	RouterModule
  ],
  declarations: [SidenavComponent],
  providers: [MediaStateService, SidenavService, AdminService],
  exports: [SidenavComponent]
})
export class CoreModule { }
