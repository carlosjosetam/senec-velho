"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var SidenavService = (function () {
    function SidenavService() {
        var _this = this;
        this.stateSource = new BehaviorSubject_1.BehaviorSubject(null);
        this.state$ = this.stateSource.asObservable();
        this.sidenavSubscription = this.state$.subscribe(function (state) {
            _this.sidenavOpened = state;
        });
    }
    SidenavService.prototype.ngOnDestroy = function () {
        this.sidenavSubscription.unsubscribe();
    };
    SidenavService.prototype.changeState = function (newState) {
        this.stateSource.next(newState);
    };
    return SidenavService;
}());
SidenavService = __decorate([
    core_1.Injectable()
], SidenavService);
exports.SidenavService = SidenavService;
//# sourceMappingURL=sidenav.service.js.map