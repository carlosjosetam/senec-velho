"use strict";
class Atividade {
    constructor(atividade) {
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
}
exports.Atividade = Atividade;
//# sourceMappingURL=atividade.model.js.map