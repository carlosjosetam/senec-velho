import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AtividadesModule } from './atividades/atividades.module';
import { PalestrantesModule } from './palestrantes/palestrantes.module';

import { AppRoutingModule } from './app-routing.module';

import { PageNotFoundComponent } from './not-found.component';
import { AppComponent } from './app.component';
import { LOCALE_ID } from '@angular/core';

@NgModule({
  imports: [
    BrowserModule,
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
  providers: [{ provide: LOCALE_ID, useValue: "pt-BR" }],
  bootstrap: [ AppComponent ]
})
export class AppModule { 
}
