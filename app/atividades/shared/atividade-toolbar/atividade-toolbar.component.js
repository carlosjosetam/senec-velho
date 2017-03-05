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
const sidenav_service_1 = require('../../../core/sidenav/sidenav.service');
const media_state_service_1 = require('../../../core/media-state.service');
let AtividadeToolbarComponent = class AtividadeToolbarComponent {
    constructor(sidenavService, mediaState) {
        this.sidenavService = sidenavService;
        this.mediaState = mediaState;
        this.isSearchOpen = false;
        this.state = "";
    }
    ngOnInit() {
        this.mediaSubscription = this.mediaState.state$.subscribe(state => {
            this.state = state;
        });
    }
    ngOnDestroy() {
        this.mediaSubscription.unsubscribe();
    }
    setIsSearchOpen(value) {
        this.isSearchOpen = value;
    }
};
AtividadeToolbarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'atividade-toolbar',
        templateUrl: 'atividade-toolbar.component.html',
        styleUrls: ['atividade-toolbar.component.css'],
    }), 
    __metadata('design:paramtypes', [sidenav_service_1.SidenavService, media_state_service_1.MediaStateService])
], AtividadeToolbarComponent);
exports.AtividadeToolbarComponent = AtividadeToolbarComponent;
//# sourceMappingURL=atividade-toolbar.component.js.map