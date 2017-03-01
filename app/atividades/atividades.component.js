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
const media_state_service_1 = require('../core/media-state.service');
let AtividadesComponent = class AtividadesComponent {
    constructor(mediaState) {
        this.mediaState = mediaState;
        this.state = "";
    }
    ngOnInit() {
        this.subscription = this.mediaState.state$.subscribe(state => {
            this.state = (state == "lg") ? "grid" : "list";
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
AtividadesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'atividades',
        templateUrl: 'atividades.component.html'
    }), 
    __metadata('design:paramtypes', [media_state_service_1.MediaStateService])
], AtividadesComponent);
exports.AtividadesComponent = AtividadesComponent;
//# sourceMappingURL=atividades.component.js.map