import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AtividadesModule } from './atividades/atividades.module';
import { PalestrantesModule } from './palestrantes/palestrantes.module';
import { AngularFireModule } from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';

import { PageNotFoundComponent } from './not-found.component';
import { AuthGuard } from './auth-guard.service';
import { AngularFireService } from './providers/angularfire.service';
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
    CoreModule,
    SharedModule,
    AtividadesModule,
    PalestrantesModule,
    AppRoutingModule
  ],
  declarations: [
    PageNotFoundComponent,
    AppComponent
  ],
  providers: [{ provide: LOCALE_ID, useValue: "pt-BR" }, AuthGuard, AngularFireService],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
