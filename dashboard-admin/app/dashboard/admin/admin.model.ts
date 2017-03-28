export class Admin {
  id: string;
  email: string;
  nome: string;

  constructor(admin?: Admin) {
    this.id = admin.id;
    this.email = admin.email;
    this.nome = admin.nome;
  }
}
