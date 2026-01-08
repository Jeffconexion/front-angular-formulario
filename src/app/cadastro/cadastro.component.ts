import { Component, OnInit, inject } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { Cliente } from './cliente';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask'
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastro',
  imports: [
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    NgxMaskDirective,
  ],
  providers: [
    provideNgxMask()
  ],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  cliente: Cliente = Cliente.NewCliente();
  atualizando: boolean = false;
  private _snackBar = inject(MatSnackBar);


  constructor(private _service: ClienteService, private _router: Router, private _activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this._activatedRoute.queryParamMap.subscribe((query: any) => {
      const params = query['params'];
      const id = params['id'];
      if (id) {
        let clienteEncontrado = this._service.pesquisarClientePorId(id);
        if (clienteEncontrado) {
          this.atualizando = true;
          this.cliente = clienteEncontrado;
        }
      }
    })
  }

  salvar() {
    if (this.atualizando === false) {
      this._service.salvar(this.cliente);
      this.cliente = Cliente.NewCliente();
      this.exibirMensagemDeFeedback("Salvo com sucesso!", "Ok");
    } else {
      this._service.atualizar(this.cliente);
      this._router.navigate(['/consulta']);
      this.exibirMensagemDeFeedback("Atualizado com sucesso!", "Ok");
    }
  }

  exibirMensagemDeFeedback(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
