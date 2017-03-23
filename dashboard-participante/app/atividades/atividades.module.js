"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var shared_module_1 = require("../shared/shared.module");
var atividades_routing_module_1 = require("./atividades-routing.module");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./shared/in-memory-data.service");
var atividades_component_1 = require("./atividades.component");
var atividade_grid_component_1 = require("./atividade-grid/atividade-grid.component");
var atividade_detail_component_1 = require("./atividade-detail/atividade-detail.component");
var atividade_toolbar_component_1 = require("./shared/atividade-toolbar/atividade-toolbar.component");
var atividade_card_component_1 = require("./shared/atividade-card/atividade-card.component");
var visibility_confirmation_component_1 = require("./shared/confirmation-dialogs/visibility-confirmation.component");
var lock_confirmation_component_1 = require("./shared/confirmation-dialogs/lock-confirmation.component");
var atividade_service_1 = require("./shared/atividade.service");
var AtividadesModule = (function () {
    function AtividadesModule() {
    }
    return AtividadesModule;
}());
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
    })
], AtividadesModule);
exports.AtividadesModule = AtividadesModule;
//# sourceMappingURL=atividades.module.js.map