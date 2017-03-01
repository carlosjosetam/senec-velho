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
const atividade_model_1 = require('../../shared/atividade.model');
const material_1 = require('@angular/material');
const visibility_confirmation_component_1 = require('./confirmation-dialogs/visibility-confirmation.component');
const lock_confirmation_component_1 = require('./confirmation-dialogs/lock-confirmation.component');
const material_2 = require('@angular/material');
const atividade_service_1 = require('../../shared/atividade.service');
let AtividadeCardComponent = class AtividadeCardComponent {
    constructor(dialog, snackBar, atividadeService) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.atividadeService = atividadeService;
        this.over = false;
        this.loading = false;
    }
    getCardColor() {
        const colorMap = {
            "Palestra": "palestra",
            "Workshop": "workshop",
            "Visita técnica": "visita",
            "Outros": "outros"
        };
        if (!colorMap[this.atividade.tipo])
            return 'nulo';
        return colorMap[this.atividade.tipo];
    }
    setOver(value) {
        this.over = value;
    }
    isLocked() {
        let inicio = new Date(this.atividade.inicioInscricao);
        let fim = new Date(this.atividade.terminoInscricao);
        let now = new Date();
        return !((inicio.getTime() <= now.getTime()) && (now.getTime() <= fim.getTime()));
    }
    openVisibilityConfirmation() {
        let dialogRef = this.dialog.open(visibility_confirmation_component_1.VisibilityConfirmationComponent);
        dialogRef.componentInstance.atividade = this.atividade;
        dialogRef.afterClosed().subscribe(result => {
            if (result === true)
                this.toggleVisibility();
        });
    }
    openLockConfirmation() {
        let dialogRef = this.dialog.open(lock_confirmation_component_1.LockConfirmationComponent);
        dialogRef.componentInstance.atividade = this.atividade;
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                if (result.confirmation)
                    this.toggleLocked(dialogRef.componentInstance.newDate, dialogRef.componentInstance.newTime);
            }
        });
    }
    toggleVisibility() {
        let value = !this.atividade.visivel;
        let msg = `A atividade "${this.atividade.titulo.substr(0, 60)}`;
        if (this.atividade.titulo.length > 60)
            msg = msg + "...";
        if (value) {
            this.handleChange('visivel', value, msg + `" agora está visível.`);
        }
        else {
            this.handleChange('visivel', value, msg + `" agora está invisível.`);
        }
    }
    toggleLocked(newTerminoDate, newTerminoTime) {
        let now = new Date();
        let value;
        let msg;
        if (this.isLocked()) {
            msg = `Você abriu as inscrições da atividade "${this.atividade.titulo.substr(0, 60)}`;
            if (this.atividade.titulo.length > 60)
                msg = msg + `..."`;
            else
                msg = msg + `"`;
            if (now < new Date(this.atividade.inicioInscricao)) {
                value = now;
                this.handleChange("inicioInscricao", value, msg);
            }
            else {
                let termino = new Date(newTerminoDate);
                termino.setHours(newTerminoTime.getHours());
                termino.setMinutes(newTerminoTime.getMinutes());
                value = termino;
                this.handleChange("terminoInscricao", value, msg);
            }
        }
        else {
            value = now;
            msg = `Você fechou as inscrições da atividade "${this.atividade.titulo.substr(0, 60)}`;
            if (this.atividade.titulo.length > 60)
                msg = msg + `..."`;
            else
                msg = msg + `"`;
            this.handleChange("terminoInscricao", value, msg);
        }
    }
    confirm() {
        let msg = `Você confirmou a atividade "${this.atividade.titulo.substr(0, 60)}`;
        if (this.atividade.titulo.length > 60)
            msg = msg + `..."`;
        let value = true;
        this.handleChange("confirmed", value, msg);
    }
    handleChange(property, value, msg) {
        this.loading = true;
        let oldValue = this.atividade[property];
        let newAtividade = new atividade_model_1.Atividade(this.atividade);
        newAtividade[property] = value;
        this.atividadeService
            .update(newAtividade)
            .then(() => {
            this.loading = false;
            this.atividade[property] = value;
        })
            .then(() => {
            let snackBarRef = this.snackBar.open(msg, 'Desfazer', { duration: 4000, extraClasses: ['snackbar'] });
            snackBarRef.onAction().subscribe(() => {
                this.loading = true;
                newAtividade[property] = oldValue;
                this.atividadeService
                    .update(newAtividade)
                    .then(() => {
                    this.loading = false;
                    this.atividade[property] = oldValue;
                });
            });
        });
    }
    hasDepencies() {
        for (var property in this.atividade) {
            if (this.atividade.hasOwnProperty(property)) {
                if (!this.atividade[property].toString().length)
                    return true;
            }
        }
        return false;
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', atividade_model_1.Atividade)
], AtividadeCardComponent.prototype, "atividade", void 0);
AtividadeCardComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'atividade-card',
        templateUrl: 'atividade-card.component.html',
        styleUrls: ['atividade-card.component.css']
    }), 
    __metadata('design:paramtypes', [material_1.MdDialog, material_2.MdSnackBar, atividade_service_1.AtividadeService])
], AtividadeCardComponent);
exports.AtividadeCardComponent = AtividadeCardComponent;
//# sourceMappingURL=atividade-card.component.js.map