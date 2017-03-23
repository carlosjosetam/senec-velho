import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { GroupByPipe } from './groupBy.pipe';
import { GroupByDayPipe } from './groupByDay.pipe';
import { LimitToPipe } from './limitTo.pipe';
import { SearchInputComponent } from './search-input/search-input.component';
import { SearchInputService } from './search-input/search-input.service';

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Md2Module }  from 'md2';


@NgModule({
	imports: [CommonModule, FormsModule, MaterialModule.forRoot(), FlexLayoutModule.forRoot(), Md2Module.forRoot()],
	declarations: [GroupByPipe,GroupByDayPipe, LimitToPipe, SearchInputComponent],
	providers: [SearchInputService],
	exports: [
		CommonModule,
		FormsModule,
		GroupByPipe,
		GroupByDayPipe,
		LimitToPipe,
		SearchInputComponent,
		MaterialModule,
		FlexLayoutModule,
		Md2Module

	]
})

export class SharedModule {}