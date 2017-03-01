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
const common_1 = require('@angular/common');
const atividade_service_1 = require('../shared/atividade.service');
const atividade_model_1 = require('../shared/atividade.model');
require('rxjs/add/operator/switchMap');
let AtividadeDetailComponent = class AtividadeDetailComponent {
    constructor(atividadeService, route, location) {
        this.atividadeService = atividadeService;
        this.route = route;
        this.location = location;
        this.loading = true;
    }
    ngOnInit() {
        this.route.params
            .switchMap((params) => this.atividadeService.getAtividade(+params['id']))
            .subscribe(atividade => {
            this.atividade = atividade;
            this.loading = false;
        });
    }
    goBack() {
        this.location.back();
    }
    save() {
        this.atividadeService.update(this.atividade)
            .then(() => this.goBack());
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', atividade_model_1.Atividade)
], AtividadeDetailComponent.prototype, "atividade", void 0);
AtividadeDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'atividade-detail',
        templateUrl: 'atividade-detail.component.html'
    }), 
    __metadata('design:paramtypes', [atividade_service_1.AtividadeService, router_1.ActivatedRoute, common_1.Location])
], AtividadeDetailComponent);
exports.AtividadeDetailComponent = AtividadeDetailComponent;
//# sourceMappingURL=atividade-detail.component.js.map