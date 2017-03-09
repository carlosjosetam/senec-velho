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
var atividade_model_1 = require("../../shared/atividade.model");
var material_1 = require("@angular/material");
var visibility_confirmation_component_1 = require("../confirmation-dialogs/visibility-confirmation.component");
var lock_confirmation_component_1 = require("../confirmation-dialogs/lock-confirmation.component");
var material_2 = require("@angular/material");
var atividade_service_1 = require("../../shared/atividade.service");
var AtividadeCardComponent = (function () {
    function AtividadeCardComponent(dialog, snackBar, atividadeService) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.atividadeService = atividadeService;
        this.over = false;
        this.loading = false;
    }
    AtividadeCardComponent.prototype.getCardColor = function () {
        var colorMap = {
            "Palestra": "palestra",
            "Workshop": "workshop",
            "Visita técnica": "visita",
            "Outros": "outros"
        };
        if (colorMap[this.atividade.tipo])
            return colorMap[this.atividade.tipo];
        return null;
    };
    AtividadeCardComponent.prototype.setOver = function (value) {
        this.over = value;
    };
    AtividadeCardComponent.prototype.isLocked = function () {
        var inicio = new Date(this.atividade.inicioInscricao);
        var fim = new Date(this.atividade.terminoInscricao);
        var now = new Date();
        return !((inicio.getTime() <= now.getTime()) && (now.getTime() <= fim.getTime()));
    };
    AtividadeCardComponent.prototype.openVisibilityConfirmation = function () {
        var _this = this;
        var dialogRef = this.dialog.open(visibility_confirmation_component_1.VisibilityConfirmationComponent);
        dialogRef.componentInstance.atividade = this.atividade;
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === true)
                _this.toggleVisibility();
        });
    };
    AtividadeCardComponent.prototype.openLockConfirmation = function () {
        var _this = this;
        var dialogRef = this.dialog.open(lock_confirmation_component_1.LockConfirmationComponent);
        dialogRef.componentInstance.atividade = this.atividade;
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                if (result.confirmation)
                    _this.toggleLocked(dialogRef.componentInstance.newDate, dialogRef.componentInstance.newTime);
            }
        });
    };
    AtividadeCardComponent.prototype.toggleVisibility = function () {
        var value = !this.atividade.visivel;
        var msg = "A atividade \"" + this.atividade.titulo.substr(0, 60);
        if (this.atividade.titulo.length > 60)
            msg = msg + "...";
        if (value) {
            this.handleChange('visivel', value, msg + "\" agora est\u00E1 vis\u00EDvel.");
        }
        else {
            this.handleChange('visivel', value, msg + "\" agora est\u00E1 invis\u00EDvel.");
        }
    };
    AtividadeCardComponent.prototype.toggleLocked = function (newTerminoDate, newTerminoTime) {
        var now = new Date();
        var value;
        var msg;
        if (this.isLocked()) {
            msg = "Voc\u00EA abriu as inscri\u00E7\u00F5es da atividade \"" + this.atividade.titulo.substr(0, 60);
            if (this.atividade.titulo.length > 60)
                msg = msg + "...\"";
            else
                msg = msg + "\"";
            if (now < new Date(this.atividade.inicioInscricao)) {
                value = now;
                this.handleChange("inicioInscricao", value, msg);
            }
            else {
                var termino = new Date(newTerminoDate);
                termino.setHours(newTerminoTime.getHours());
                termino.setMinutes(newTerminoTime.getMinutes());
                value = termino;
                this.handleChange("terminoInscricao", value, msg);
            }
        }
        else {
            value = now;
            msg = "Voc\u00EA fechou as inscri\u00E7\u00F5es da atividade \"" + this.atividade.titulo.substr(0, 60);
            if (this.atividade.titulo.length > 60)
                msg = msg + "...\"";
            else
                msg = msg + "\"";
            this.handleChange("terminoInscricao", value, msg);
        }
    };
    AtividadeCardComponent.prototype.confirm = function () {
        var msg = "Voc\u00EA confirmou a atividade \"" + this.atividade.titulo.substr(0, 60);
        if (this.atividade.titulo.length > 60)
            msg = msg + "...\"";
        var value = true;
        this.handleChange("confirmed", value, msg);
    };
    AtividadeCardComponent.prototype.handleChange = function (property, value, msg) {
        var _this = this;
        this.loading = true;
        var oldValue = this.atividade[property];
        var newAtividade = new atividade_model_1.Atividade(this.atividade);
        newAtividade[property] = value;
        this.atividadeService
            .update(newAtividade)
            .then(function () {
            _this.loading = false;
            _this.atividade[property] = value;
        })
            .then(function () {
            var snackBarRef = _this.snackBar.open(msg, 'Desfazer', { duration: 4000, extraClasses: ['snackbar'] });
            snackBarRef.onAction().subscribe(function () {
                _this.loading = true;
                newAtividade[property] = oldValue;
                _this.atividadeService
                    .update(newAtividade)
                    .then(function () {
                    _this.loading = false;
                    _this.atividade[property] = oldValue;
                });
            });
        });
    };
    AtividadeCardComponent.prototype.hasDepencies = function () {
        for (var property in this.atividade) {
            if (this.atividade.hasOwnProperty(property)) {
                if (!this.atividade[property].toString().length)
                    return true;
            }
        }
        return false;
    };
    return AtividadeCardComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", atividade_model_1.Atividade)
], AtividadeCardComponent.prototype, "atividade", void 0);
AtividadeCardComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'atividade-card',
        templateUrl: 'atividade-card.component.html',
        styleUrls: ['atividade-card.component.css']
    }),
    __metadata("design:paramtypes", [material_1.MdDialog, material_2.MdSnackBar, atividade_service_1.AtividadeService])
], AtividadeCardComponent);
exports.AtividadeCardComponent = AtividadeCardComponent;
//# sourceMappingURL=atividade-card.component.js.map