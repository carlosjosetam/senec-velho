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
const router_1 = require('@angular/router');
const atividades_component_1 = require('./atividades.component');
const atividade_detail_component_1 = require('./atividade-detail/atividade-detail.component');
let AtividadesRoutingModule = class AtividadesRoutingModule {
};
AtividadesRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild([
                { path: 'atividades', component: atividades_component_1.AtividadesComponent },
                { path: 'atividades/:id', component: atividade_detail_component_1.AtividadeDetailComponent }
            ])],
        exports: [router_1.RouterModule]
    }), 
    __metadata('design:paramtypes', [])
], AtividadesRoutingModule);
exports.AtividadesRoutingModule = AtividadesRoutingModule;
//# sourceMappingURL=atividades-routing.module.js.map