import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';
import { AngularFireModule } from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { PageNotFoundComponent } from './not-found.component';
import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { AppComponent } from './app.component';
import { LOCALE_ID } from '@angular/core';

export const firebaseConfig = {
  apiKey: 'AIzaSyCXPcDPKSlZRJXI-K8dSjuoAof-HjyIAM0',
  authDomain: 'senec-app.firebaseapp.com',
  databaseURL: 'https://senec-app.firebaseio.com',
  storageBucket: 'senec-app.appspot.com',
  messagingSenderId: '1062894931468'
};

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    SharedModule,
    DashboardModule,
    LoginModule,
    AppRoutingModule
  ],
  declarations: [
    PageNotFoundComponent,
    AppComponent
  ],
  providers: [{ provide: LOCALE_ID, useValue: "pt-BR" }, AuthGuard, AuthService],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
