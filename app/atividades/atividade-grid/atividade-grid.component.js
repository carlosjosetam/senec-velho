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
const atividade_service_1 = require('../shared/atividade.service');
const search_input_service_1 = require('../../shared/search-input/search-input.service');
let AtividadeGridComponent = class AtividadeGridComponent {
    constructor(atividadeService, router, searchTerm) {
        this.atividadeService = atividadeService;
        this.router = router;
        this.searchTerm = searchTerm;
        this.loading = true;
        this.over = false;
        this.selectedVisible = "none";
        this.selectedFilter = "Todas";
    }
    gotoDetail(atividade) {
        this.router.navigate(['/atividades/', atividade.id]);
    }
    getAtividades() {
        this.atividadeService.getAtividades().then(atividades => {
            this.atividades = atividades.sort(this.compare);
            this.loading = false;
            this.atividadesFiltradas = this.atividades.slice();
            this.searchSubscription = this.searchTerm.searchTerm$.subscribe(value => {
                this.atividadesFiltradas = this.atividades.filter(a => {
                    let valueLower = value.toLowerCase();
                    let titulo = a.titulo.toLowerCase();
                    if (titulo.indexOf(valueLower) != -1) {
                        return true;
                    }
                });
            });
        });
    }
    ngOnInit() {
        this.getAtividades();
    }
    ngOnDestroy() {
        if (this.searchSubscription)
            this.searchSubscription.unsubscribe();
    }
    add(titulo) {
        titulo = titulo.trim();
        if (!titulo) {
            return;
        }
        this.atividadeService.create(titulo)
            .then(atividade => {
            this.atividades.push(atividade);
        });
    }
    delete(atividade) {
        this.atividadeService
            .delete(atividade.id)
            .then(() => {
            this.atividades = this.atividades.filter(a => a !== atividade);
        });
    }
    compare(a, b) {
        if (a.inicioAtividade < b.inicioAtividade)
            return -1;
        if (a.inicioAtividade > b.inicioAtividade)
            return 1;
        return 0;
    }
    getQtdPalestras() {
        return this.atividadesFiltradas.filter(a => a.tipo == "Palestra").length;
    }
    getQtdWorkshops() {
        return this.atividadesFiltradas.filter(a => a.tipo == "Workshop").length;
    }
    getQtdVisitas() {
        return this.atividadesFiltradas.filter(a => a.tipo == "Visita técnica").length;
    }
    getQtdOutros() {
        return this.atividadesFiltradas.filter(a => a.tipo == "Outros").length;
    }
    getQtdConfirmadas() {
        return this.atividadesFiltradas.filter(a => {
            if (!a.confirmed)
                return false;
            if (this.selectedVisible != a.tipo && this.selectedVisible != 'none')
                return false;
            return true;
        }).length;
    }
    getTotalAtividades() {
        return this.atividadesFiltradas.filter(a => {
            if (this.selectedVisible != a.tipo && this.selectedVisible != 'none')
                return false;
            return true;
        }).length;
    }
    toggleVisibilityPalestra() {
        if (this.selectedVisible != "Palestra")
            this.selectedVisible = "Palestra";
        else
            this.selectedVisible = "none";
    }
    toggleVisibilityWorkshop() {
        if (this.selectedVisible != "Workshop")
            this.selectedVisible = "Workshop";
        else
            this.selectedVisible = "none";
    }
    toggleVisibilityVisita() {
        if (this.selectedVisible != "Visita técnica")
            this.selectedVisible = "Visita técnica";
        else
            this.selectedVisible = "none";
    }
    toggleVisibilityOutros() {
        if (this.selectedVisible != "Outros")
            this.selectedVisible = "Outros";
        else
            this.selectedVisible = "none";
    }
    matchFilter(atividade) {
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
    }
};
AtividadeGridComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'atividade-grid',
        templateUrl: 'atividade-grid.component.html',
        styleUrls: ['atividade-grid.component.css'],
    }), 
    __metadata('design:paramtypes', [atividade_service_1.AtividadeService, router_1.Router, search_input_service_1.SearchInputService])
], AtividadeGridComponent);
exports.AtividadeGridComponent = AtividadeGridComponent;
//# sourceMappingURL=atividade-grid.component.js.map