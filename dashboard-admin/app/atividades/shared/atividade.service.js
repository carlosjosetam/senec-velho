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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var AtividadeService = (function () {
    function AtividadeService(http) {
        this.http = http;
        this.atividadesUrl = 'api/atividades';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    AtividadeService.prototype.getAtividades = function () {
        return this.http.get(this.atividadesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    AtividadeService.prototype.handleError = function (error) {
        console.error('An error ocurred', error);
        return Promise.reject(error.message || error);
    };
    AtividadeService.prototype.getAtividade = function (id) {
        var url = this.atividadesUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    AtividadeService.prototype.update = function (atividade) {
        var url = this.atividadesUrl + "/" + atividade.id;
        return this.http
            .put(url, JSON.stringify(atividade), { headers: this.headers })
            .toPromise()
            .then(function () { return atividade; })
            .catch(this.handleError);
    };
    AtividadeService.prototype.create = function (titulo) {
        return this.http
            .post(this.atividadesUrl, JSON.stringify({ titulo: titulo }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    AtividadeService.prototype.delete = function (id) {
        var url = this.atividadesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    return AtividadeService;
}());
AtividadeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AtividadeService);
exports.AtividadeService = AtividadeService;
//# sourceMappingURL=atividade.service.js.map