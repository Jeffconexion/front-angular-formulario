import { v4 as uuid } from 'uuid';

export class Cliente {
  id?: string;
  nome?: string;
  email?: string;
  dataNascimento?: string;
  cpf?: string;
  deletado: boolean = false;
  uf?: string;
  municipio?: string;

  static NewCliente(): Cliente {
    const cliente = new Cliente();
    cliente.id = uuid();
    return cliente;
  }
}
