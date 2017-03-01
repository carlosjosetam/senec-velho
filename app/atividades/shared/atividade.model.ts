export class Atividade {
	id: string;
	titulo: string;
	descricao: string;
	local: string;
	inicioInscricao: Date;
	terminoInscricao: Date;
	inicioAtividade: Date;
	terminoAtividade: Date;
	pontos: number;
	vagas: number;
	tipo: string;
	visivel: boolean;
	confirmed: boolean;

	constructor(atividade?: Atividade) {
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