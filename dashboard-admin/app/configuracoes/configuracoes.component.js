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
var configuracoes_service_1 = require("./configuracoes.service");
var ConfiguracoesComponent = (function () {
    function ConfiguracoesComponent(configService) {
        this.configService = configService;
    }
    ConfiguracoesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configService.getConfiguracoes()
            .then(function (configuracoes) {
            _this.configuracoes = configuracoes;
            console.log(_this.configuracoes);
        });
    };
    return ConfiguracoesComponent;
}());
ConfiguracoesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'configuracoes',
        templateUrl: 'configuracoes.component.html',
        styleUrls: ['configuracoes.component.css']
    }),
    __metadata("design:paramtypes", [configuracoes_service_1.ConfiguracoesService])
], ConfiguracoesComponent);
exports.ConfiguracoesComponent = ConfiguracoesComponent;
//# sourceMappingURL=configuracoes.component.js.map