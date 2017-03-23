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
var atividade_service_1 = require("../shared/atividade.service");
var search_input_service_1 = require("../../shared/search-input/search-input.service");
var AtividadeGridComponent = (function () {
    function AtividadeGridComponent(atividadeService, router, searchTerm) {
        this.atividadeService = atividadeService;
        this.router = router;
        this.searchTerm = searchTerm;
        this.loading = true;
        this.over = false;
        this.selectedVisible = "none";
        this.selectedFilter = "Todas";
    }
    AtividadeGridComponent.prototype.gotoDetail = function (atividade) {
        this.router.navigate(['/atividades/', atividade.id]);
    };
    AtividadeGridComponent.prototype.getAtividades = function () {
        var _this = this;
        this.atividadeService.getAtividades().then(function (atividades) {
            _this.atividades = atividades.sort(_this.compare);
            _this.loading = false;
            _this.atividadesFiltradas = _this.atividades.slice();
            _this.searchSubscription = _this.searchTerm.searchTerm$.subscribe(function (value) {
                _this.atividadesFiltradas = _this.atividades.filter(function (a) {
                    var valueLower = value.toLowerCase();
                    var titulo = a.titulo.toLowerCase();
                    if (titulo.indexOf(valueLower) != -1) {
                        return true;
                    }
                });
            });
        });
    };
    AtividadeGridComponent.prototype.ngOnInit = function () {
        this.getAtividades();
    };
    AtividadeGridComponent.prototype.ngOnDestroy = function () {
        if (this.searchSubscription)
            this.searchSubscription.unsubscribe();
    };
    AtividadeGridComponent.prototype.add = function (titulo) {
        var _this = this;
        titulo = titulo.trim();
        if (!titulo) {
            return;
        }
        this.atividadeService.create(titulo)
            .then(function (atividade) {
            _this.atividades.push(atividade);
        });
    };
    AtividadeGridComponent.prototype.delete = function (atividade) {
        var _this = this;
        this.atividadeService
            .delete(atividade.id)
            .then(function () {
            _this.atividades = _this.atividades.filter(function (a) { return a !== atividade; });
        });
    };
    AtividadeGridComponent.prototype.compare = function (a, b) {
        if (a.inicioAtividade < b.inicioAtividade)
            return -1;
        if (a.inicioAtividade > b.inicioAtividade)
            return 1;
        return 0;
    };
    AtividadeGridComponent.prototype.getQtdPalestras = function () {
        return this.atividadesFiltradas.filter(function (a) { return a.tipo == "Palestra"; }).length;
    };
    AtividadeGridComponent.prototype.getQtdWorkshops = function () {
        return this.atividadesFiltradas.filter(function (a) { return a.tipo == "Workshop"; }).length;
    };
    AtividadeGridComponent.prototype.getQtdVisitas = function () {
        return this.atividadesFiltradas.filter(function (a) { return a.tipo == "Visita técnica"; }).length;
    };
    AtividadeGridComponent.prototype.getQtdOutros = function () {
        return this.atividadesFiltradas.filter(function (a) { return a.tipo == "Outros"; }).length;
    };
    AtividadeGridComponent.prototype.getQtdConfirmadas = function () {
        var _this = this;
        return this.atividadesFiltradas.filter(function (a) {
            if (!a.confirmed)
                return false;
            if (_this.selectedVisible != a.tipo && _this.selectedVisible != 'none')
                return false;
            return true;
        }).length;
    };
    AtividadeGridComponent.prototype.getTotalAtividades = function () {
        var _this = this;
        return this.atividadesFiltradas.filter(function (a) {
            if (_this.selectedVisible != a.tipo && _this.selectedVisible != 'none')
                return false;
            return true;
        }).length;
    };
    AtividadeGridComponent.prototype.toggleVisibilityPalestra = function () {
        if (this.selectedVisible != "Palestra")
            this.selectedVisible = "Palestra";
        else
            this.selectedVisible = "none";
    };
    AtividadeGridComponent.prototype.toggleVisibilityWorkshop = function () {
        if (this.selectedVisible != "Workshop")
            this.selectedVisible = "Workshop";
        else
            this.selectedVisible = "none";
    };
    AtividadeGridComponent.prototype.toggleVisibilityVisita = function () {
        if (this.selectedVisible != "Visita técnica")
            this.selectedVisible = "Visita técnica";
        else
            this.selectedVisible = "none";
    };
    AtividadeGridComponent.prototype.toggleVisibilityOutros = function () {
        if (this.selectedVisible != "Outros")
            this.selectedVisible = "Outros";
        else
            this.selectedVisible = "none";
    };
    AtividadeGridComponent.prototype.matchFilter = function (atividade) {
        if (this.selectedFilter == 'Todas')
            return true;
        if (this.selectedFilter == 'Confirmadas') {
            if (atividade.confirmed)
                return true;
            return false;
        }
        if (this.selectedFilter == 'Talvez' && !atividade.confirmed)
            return true;
        return false;
    };
    return AtividadeGridComponent;
}());
AtividadeGridComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'atividade-grid',
        templateUrl: 'atividade-grid.component.html',
        styleUrls: ['atividade-grid.component.css'],
    }),
    __metadata("design:paramtypes", [atividade_service_1.AtividadeService,
        router_1.Router,
        search_input_service_1.SearchInputService])
], AtividadeGridComponent);
exports.AtividadeGridComponent = AtividadeGridComponent;
//# sourceMappingURL=atividade-grid.component.js.map