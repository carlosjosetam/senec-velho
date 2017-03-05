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
require('./rxjs-extensions');
const core_1 = require('@angular/core');
const http_1 = require('@angular/http');
const shared_module_1 = require('../shared/shared.module');
const atividades_routing_module_1 = require('./atividades-routing.module');
const angular_in_memory_web_api_1 = require('angular-in-memory-web-api');
const in_memory_data_service_1 = require('./shared/in-memory-data.service');
const atividades_component_1 = require('./atividades.component');
const atividade_grid_component_1 = require('./atividade-grid/atividade-grid.component');
const atividade_detail_component_1 = require('./atividade-detail/atividade-detail.component');
const atividade_toolbar_component_1 = require('./shared/atividade-toolbar/atividade-toolbar.component');
const atividade_card_component_1 = require('./shared/atividade-card/atividade-card.component');
const visibility_confirmation_component_1 = require('./shared/confirmation-dialogs/visibility-confirmation.component');
const lock_confirmation_component_1 = require('./shared/confirmation-dialogs/lock-confirmation.component');
const atividade_service_1 = require('./shared/atividade.service');
let AtividadesModule = class AtividadesModule {
};
AtividadesModule = __decorate([
    core_1.NgModule({
        imports: [
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
            shared_module_1.SharedModule,
            atividades_routing_module_1.AtividadesRoutingModule,
        ],
        declarations: [
            atividades_component_1.AtividadesComponent, atividade_detail_component_1.AtividadeDetailComponent, atividade_grid_component_1.AtividadeGridComponent, atividade_toolbar_component_1.AtividadeToolbarComponent,
            atividade_card_component_1.AtividadeCardComponent, visibility_confirmation_component_1.VisibilityConfirmationComponent, lock_confirmation_component_1.LockConfirmationComponent
        ],
        entryComponents: [visibility_confirmation_component_1.VisibilityConfirmationComponent, lock_confirmation_component_1.LockConfirmationComponent],
        providers: [atividade_service_1.AtividadeService],
    }), 
    __metadata('design:paramtypes', [])
], AtividadesModule);
exports.AtividadesModule = AtividadesModule;
//# sourceMappingURL=atividades.module.js.map