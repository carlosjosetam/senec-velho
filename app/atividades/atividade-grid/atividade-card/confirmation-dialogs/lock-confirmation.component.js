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
const material_1 = require('@angular/material');
const atividade_model_1 = require('../../../shared/atividade.model');
let LockConfirmationComponent = class LockConfirmationComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
        this.newDate = new Date(this.atividade.inicioAtividade);
        this.newTime = new Date(this.atividade.inicioAtividade);
        this.min = new Date();
        this.max = new Date(this.atividade.inicioAtividade);
    }
    isLocked() {
        let inicio = new Date(this.atividade.inicioInscricao);
        let fim = new Date(this.atividade.terminoInscricao);
        let now = new Date();
        return !((inicio.getTime() <= now.getTime()) && (now.getTime() <= fim.getTime()));
    }
    now() {
        return new Date();
    }
    getDateTime(dateTime) {
        return new Date(dateTime);
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', atividade_model_1.Atividade)
], LockConfirmationComponent.prototype, "atividade", void 0);
LockConfirmationComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'lock-confirmation',
        templateUrl: 'lock-confirmation.component.html'
    }), 
    __metadata('design:paramtypes', [material_1.MdDialogRef])
], LockConfirmationComponent);
exports.LockConfirmationComponent = LockConfirmationComponent;
//# sourceMappingURL=lock-confirmation.component.js.map