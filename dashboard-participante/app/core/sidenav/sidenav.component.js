"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SidenavComponent = (function () {
    function SidenavComponent() {
        this.menuItems = [
            { 'descricao': 'Cronograma', 'link': 'atividades', 'icon': 'dashboard', 'category': '', 'disabled': false },
            { 'descricao': 'Minha SEnEC', 'link': 'minha-senec', 'icon': 'perm_contact_calendar', 'category': '', 'disabled': true },
            { 'descricao': 'Meu Perfil', 'link': 'perfil', 'icon': 'people', 'category': 'Conta', 'disabled': true },
            { 'descricao': 'Segurança', 'link': 'seguranca', 'icon': 'security', 'category': 'Conta', 'disabled': true },
        ];
    }
    return SidenavComponent;
}());
SidenavComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sidenav',
        templateUrl: 'sidenav.component.html',
        styleUrls: ['sidenav.component.css'],
    })
], SidenavComponent);
exports.SidenavComponent = SidenavComponent;
//# sourceMappingURL=sidenav.component.js.map