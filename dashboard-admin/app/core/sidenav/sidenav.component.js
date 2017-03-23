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
            { 'descricao': 'Atividades', 'link': 'atividades', 'icon': 'dashboard', 'category': '' },
            { 'descricao': 'Participantes', 'link': 'participantes', 'icon': 'school', 'category': '' },
            { 'descricao': 'Palestrantes', 'link': 'palestrantes', 'icon': 'people', 'category': '' },
            { 'descricao': 'Patrocinadores', 'link': 'patrocinadores', 'icon': 'work', 'category': '' },
            { 'descricao': 'Administradores', 'link': 'administradores', 'icon': 'assignment_ind', 'category': '' },
            { 'descricao': 'Cadastros', 'link': 'analytics/cadastros', 'icon': 'trending_up', 'category': 'Analytics' },
            { 'descricao': 'Dados de Acesso', 'link': 'analytics/acesso', 'icon': 'swap_vert', 'category': 'Analytics' },
            { 'descricao': 'Segurança', 'link': 'user/seguranca', 'icon': 'security', 'category': 'Conta' },
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