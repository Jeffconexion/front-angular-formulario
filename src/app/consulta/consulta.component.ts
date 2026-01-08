import { Component, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cadastro/cliente';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-consulta',
  imports: [
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  listaClientes: Cliente[] = [];
  colunasTable: string[] = ["Id", "Nome", "CPF", "Data de Nascimento", "E-mail", "Ações"]
  nomeBusca: string = "";
  constructor(private _service: ClienteService, private _router: Router) { }
  deletando: boolean = false;


  ngOnInit(): void {
    this.listaClientes = this._service.pesquisarCliente('');
    console.log(this.listaClientes);
  }

  pesquisar() {
    this.listaClientes = this._service.pesquisarCliente(this.nomeBusca)
  }

  preparaEditar(id: string) {
    this._router.navigate(
      ["/cadastro"],
      { queryParams: { id: id } }
    )
  }

  preparaDeletar() {
    this.deletando = true;
  }

  deletar(cliente: Cliente) {
    this._service.deletar(cliente);
    this.listaClientes = this._service.pesquisarCliente('');
    this.deletando = false;
  }
}
