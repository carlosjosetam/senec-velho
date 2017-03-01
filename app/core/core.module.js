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
const common_1 = require('@angular/common');
const material_1 = require('@angular/material');
const flex_layout_1 = require('@angular/flex-layout');
const shared_module_1 = require('../shared/shared.module');
const router_1 = require('@angular/router');
const sidenav_component_1 = require('./sidenav/sidenav.component');
const media_state_service_1 = require('./media-state.service');
const sidenav_service_1 = require('./sidenav/sidenav.service');
// other imports 
let CoreModule = class CoreModule {
};
CoreModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            material_1.MaterialModule.forRoot(),
            flex_layout_1.FlexLayoutModule.forRoot(),
            shared_module_1.SharedModule,
            router_1.RouterModule
        ],
        declarations: [sidenav_component_1.SidenavComponent],
        providers: [media_state_service_1.MediaStateService, sidenav_service_1.SidenavService],
        exports: [sidenav_component_1.SidenavComponent]
    }), 
    __metadata('design:paramtypes', [])
], CoreModule);
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map