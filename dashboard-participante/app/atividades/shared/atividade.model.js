"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Atividade = (function () {
    function Atividade(atividade) {
        this.id = atividade.id;
        this.titulo = atividade.titulo;
        this.descricao = atividade.descricao;
        this.local = atividade.local;
        this.inicioInscricao = atividade.inicioInscricao;
        this.terminoInscricao = atividade.terminoInscricao;
        this.inicioAtividade = atividade.inicioAtividade;
        this.terminoAtividade = atividade.terminoAtividade;
        this.pontos = atividade.pontos;
        this.vagas = atividade.vagas;
        this.tipo = atividade.tipo;
        this.visivel = atividade.visivel;
        this.confirmed = atividade.confirmed;
    }
    return Atividade;
}());
exports.Atividade = Atividade;
//# sourceMappingURL=atividade.model.js.map