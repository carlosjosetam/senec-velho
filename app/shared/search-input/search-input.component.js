"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const core_2 = require('@angular/core');
const search_input_service_1 = require('./search-input.service');
const platform_browser_1 = require('@angular/platform-browser');
let SearchInputComponent = class SearchInputComponent {
    constructor(searchService, sanitizer) {
        this.searchService = searchService;
        this.sanitizer = sanitizer;
        this.opened = new core_1.EventEmitter();
        this.search = false;
        this.focused = false;
    }
    ngOnInit() {
        let numericWidth = Number(this.width.substring(0, this.width.length - 2)) - 84;
        this.safeWidth = this.sanitizer.bypassSecurityTrustStyle(`${numericWidth}px`);
    }
    ngAfterViewChecked() {
        if (this.el && !this.focused) {
            this.el.nativeElement.focus();
            this.focused = true;
        }
    }
    searchUpdate(newValue) {
        this.searchService.updateTerm(newValue);
    }
    toggleSearchInput(value) {
        this.search = value;
        this.opened.emit(value);
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], SearchInputComponent.prototype, "placeholderText", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], SearchInputComponent.prototype, "color", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], SearchInputComponent.prototype, "width", void 0);
__decorate([
    core_1.Output('onToggleOpened'), 
    __metadata('design:type', Object)
], SearchInputComponent.prototype, "opened", void 0);
__decorate([
    core_1.ViewChild('searchInput'), 
    __metadata('design:type', core_1.ElementRef)
], SearchInputComponent.prototype, "el", void 0);
SearchInputComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'search-input',
        templateUrl: 'search-input.component.html',
        animations: [
            core_2.trigger('myAnimation', [
                core_2.transition(':enter', [
                    core_2.style({ marginLeft: 'calc(-100% + 44px)', transform: 'scale(0,1)', transformOrigin: '100% 50%' }),
                    core_2.animate('200ms cubic-bezier(.4,0,.2,1)', core_2.style({ marginLeft: '0px', transform: 'scale(1,1)', transformOrigin: '100% 50%' }))
                ]),
                core_2.transition(':leave', [
                    core_2.style({ marginLeft: '0px', transform: 'scale(1,1)', transformOrigin: '100% 50%' }),
                    core_2.animate('200ms cubic-bezier(.4,0,.2,1)', core_2.style({ marginLeft: 'calc(-100% + 44px)', transform: 'scale(0,1)', transformOrigin: '100% 50%' }))
                ])]),
        ],
    }), 
    __metadata('design:paramtypes', [search_input_service_1.SearchInputService, platform_browser_1.DomSanitizer])
], SearchInputComponent);
exports.SearchInputComponent = SearchInputComponent;
//# sourceMappingURL=search-input.component.js.map