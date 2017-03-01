import { Component, Input, ViewChild, ElementRef, OnInit, Output, EventEmitter, AfterViewChecked} from '@angular/core';
import { trigger, animate, state, transition, style } from '@angular/core';
import {SearchInputService} from './search-input.service';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
	moduleId: module.id,
	selector: 'search-input',
	templateUrl: 'search-input.component.html',
	animations: [
    trigger(
      'myAnimation',
      [
        transition(
        ':enter', [
          style({marginLeft:'calc(-100% + 44px)', transform: 'scale(0,1)', transformOrigin: '100% 50%' }),
          animate('200ms cubic-bezier(.4,0,.2,1)', style({marginLeft: '0px', transform: 'scale(1,1)', transformOrigin: '100% 50%'}))
        ]
      ),
      transition(
        ':leave', [
          style({marginLeft:'0px', transform: 'scale(1,1)', transformOrigin: '100% 50%'}),
          animate('200ms cubic-bezier(.4,0,.2,1)', style({marginLeft:'calc(-100% + 44px)', transform: 'scale(0,1)', transformOrigin: '100% 50%'}))
        ]
      )]
    ),
  ],
})

export class SearchInputComponent implements OnInit, AfterViewChecked{  

	@Input() placeholderText: string;
	@Input() color: string;
	@Input() width: string;
	@Output('onToggleOpened') opened = new EventEmitter<boolean>();
	@ViewChild('searchInput') el:ElementRef;

	private search = false;
	private focused = false;

	private safeWidth: SafeStyle;

	constructor( private searchService: SearchInputService, private sanitizer: DomSanitizer) {

	}

	ngOnInit() {
		let numericWidth = Number(this.width.substring(0,this.width.length-2)) - 84;
		this.safeWidth = this.sanitizer.bypassSecurityTrustStyle(`${numericWidth}px`);
	}
	ngAfterViewChecked() {
		if (this.el && !this.focused) {
			this.el.nativeElement.focus();
			this.focused = true;
		}
	}

	searchUpdate(newValue: string) {
		this.searchService.updateTerm(newValue);
	}
	toggleSearchInput(value: boolean) {
		this.search = value;
		this.opened.emit(value);
	}
}