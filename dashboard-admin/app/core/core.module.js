"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var material_1 = require("@angular/material");
var flex_layout_1 = require("@angular/flex-layout");
var shared_module_1 = require("../shared/shared.module");
var router_1 = require("@angular/router");
var sidenav_component_1 = require("./sidenav/sidenav.component");
var media_state_service_1 = require("./media-state.service");
var sidenav_service_1 = require("./sidenav/sidenav.service");
// other imports 
var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
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
    })
], CoreModule);
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map