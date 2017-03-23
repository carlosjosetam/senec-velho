"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var material_1 = require("@angular/material");
var flex_layout_1 = require("@angular/flex-layout");
require("hammerjs");
var core_module_1 = require("./core/core.module");
var shared_module_1 = require("./shared/shared.module");
var atividades_module_1 = require("./atividades/atividades.module");
var palestrantes_module_1 = require("./palestrantes/palestrantes.module");
var app_routing_module_1 = require("./app-routing.module");
var not_found_component_1 = require("./not-found.component");
var app_component_1 = require("./app.component");
var core_2 = require("@angular/core");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            material_1.MaterialModule.forRoot(),
            flex_layout_1.FlexLayoutModule.forRoot(),
            core_module_1.CoreModule,
            shared_module_1.SharedModule,
            atividades_module_1.AtividadesModule,
            palestrantes_module_1.PalestrantesModule,
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            not_found_component_1.PageNotFoundComponent,
            app_component_1.AppComponent
        ],
        providers: [{ provide: core_2.LOCALE_ID, useValue: "pt-BR" }],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map