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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const core_1 = require('@angular/core');
const sidenav_service_1 = require('./core/sidenav/sidenav.service');
const flex_layout_1 = require("@angular/flex-layout");
const media_state_service_1 = require('./core/media-state.service');
let AppComponent = class AppComponent {
    constructor(_media$, sidenavService, mediaState) {
        this._media$ = _media$;
        this.sidenavService = sidenavService;
        this.mediaState = mediaState;
        this.mode = "";
    }
    ngOnInit() {
        this._watcher = this.watchMQChanges();
    }
    ngOnDestroy() {
        this._watcher.unsubscribe();
    }
    watchMQChanges() {
        return this._media$.subscribe((change) => {
            let value = change ? `'${change.mqAlias}' = ${change.mediaQuery} )` : "";
            if (value == "'xs' = screen and (max-width: 599px) )") {
                this.mode = "over";
                this.mediaState.changeState("xs");
                this.sidenavService.changeState(false);
            }
            else if ((value == "'sm' = screen and (min-width: 600px) and (max-width: 959px) )") || (value == "'gt-xs' = screen and (min-width: 600px) )")) {
                this.mode = "over";
                this.mediaState.changeState("sm");
                this.sidenavService.changeState(false);
            }
            else if (value == "'md' = screen and (min-width: 960px) and (max-width: 1279px) )") {
                this.mode = "side";
                this.mediaState.changeState("md");
                this.sidenavService.changeState(true);
            }
            else {
                this.mode = "side";
                this.mediaState.changeState("lg");
                this.sidenavService.changeState(true);
            }
        });
    }
    ;
};
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'senec-app',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.css'],
    }),
    __param(0, core_1.Inject(flex_layout_1.ObservableMediaService)), 
    __metadata('design:paramtypes', [Object, sidenav_service_1.SidenavService, media_state_service_1.MediaStateService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map