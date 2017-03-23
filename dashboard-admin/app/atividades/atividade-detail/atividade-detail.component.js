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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var atividade_service_1 = require("../shared/atividade.service");
var atividade_model_1 = require("../shared/atividade.model");
require("rxjs/add/operator/switchMap");
var AtividadeDetailComponent = (function () {
    function AtividadeDetailComponent(atividadeService, route, location) {
        this.atividadeService = atividadeService;
        this.route = route;
        this.location = location;
        this.loading = true;
    }
    AtividadeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.atividadeService.getAtividade(+params['id']); })
            .subscribe(function (atividade) {
            _this.atividade = atividade;
            _this.loading = false;
        });
    };
    AtividadeDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    AtividadeDetailComponent.prototype.save = function () {
        var _this = this;
        this.atividadeService.update(this.atividade)
            .then(function () { return _this.goBack(); });
    };
    return AtividadeDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", atividade_model_1.Atividade)
], AtividadeDetailComponent.prototype, "atividade", void 0);
AtividadeDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'atividade-detail',
        templateUrl: 'atividade-detail.component.html'
    }),
    __metadata("design:paramtypes", [atividade_service_1.AtividadeService,
        router_1.ActivatedRoute,
        common_1.Location])
], AtividadeDetailComponent);
exports.AtividadeDetailComponent = AtividadeDetailComponent;
//# sourceMappingURL=atividade-detail.component.js.map