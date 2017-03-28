import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { HttpModule }    from '@angular/http';
import { SharedModule } from '../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    HttpModule,
    SharedModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent],
  providers: []
})
export class LoginModule { }
