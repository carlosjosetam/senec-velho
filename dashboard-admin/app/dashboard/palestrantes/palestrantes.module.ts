import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PalestrantesComponent } from './palestrantes.component';
import { PalestrantesRoutingModule } from './palestrantes-routing.module';

@NgModule({

	imports: [ 
	
	CommonModule,
	FormsModule,
	HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    PalestrantesRoutingModule
    ],

	declarations: [ PalestrantesComponent]
})

export class PalestrantesModule { }