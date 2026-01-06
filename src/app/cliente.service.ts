import { Injectable } from '@angular/core';
import { Cliente } from './cadastro/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  static REPO_CLIENTES = "_CLIENTES";

  constructor() { }

  salvar(cliente: Cliente) {
    let storageClientes = this.obterStorage();
    storageClientes.push(cliente);

    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storageClientes));
  }

  pesquisarCliente(nome: string): Cliente[] {
    if (!nome) {
      return this.obterStorage();
    }
    return this.obterStorage().filter(cliente => cliente.nome?.toLowerCase().indexOf(nome.toLowerCase()) !== -1);
  }

  private obterStorage(): Cliente[] {
    let clientes: Cliente[] = []

    let repositorioClientes = localStorage.getItem(ClienteService.REPO_CLIENTES);

    if (repositorioClientes) {
      clientes = JSON.parse(repositorioClientes);
      return clientes;
    }

    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(clientes))
    return clientes;
  }

}
