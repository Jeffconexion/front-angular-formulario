import { Component, OnInit, inject } from '@angular/core';
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
import { NgxMaskDirective, provideNgxMask, NgxMaskPipe } from 'ngx-mask'
import { MatSnackBar } from '@angular/material/snack-bar';



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
    CommonModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [
    provideNgxMask()
  ],
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  listaClientes: Cliente[] = [];
  colunasTable: string[] = ["Id", "Nome", "CPF", "Data de Nascimento", "E-mail", "Ações"]
  nomeBusca: string = "";
  private _snackBar = inject(MatSnackBar);


  constructor(private _service: ClienteService, private _router: Router) { }

  ngOnInit(): void {
    this.listaClientes = this._service.pesquisarCliente('');
    console.log(this.listaClientes);
  }

  pesquisar() {
    this.listaClientes = this._service.pesquisarCliente(this.nomeBusca)
    this.exibirMensagemDeFeedback("Busca finlizada!", "Ok");
  }

  preparaEditar(id: string) {
    this._router.navigate(
      ["/cadastro"],
      { queryParams: { id: id } }
    )
  }

  preparaDeletar(cliente: Cliente) {
    cliente.deletado = true;
  }

  deletar(cliente: Cliente) {
    this._service.deletar(cliente);
    this.listaClientes = this._service.pesquisarCliente('');
    this.exibirMensagemDeFeedback("Deletado com sucesso!", "Ok");
  }

  exibirMensagemDeFeedback(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
