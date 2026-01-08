import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estado } from './brasilapi.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrasilapiService {
  baseUrl: string = 'https://brasilapi.com.br/api'
  constructor(private _httpCliente: HttpClient) { }

  listarUfs(): Observable<Estado[]> {
    const path = '/ibge/uf/v1';
    return this._httpCliente.get<Estado[]>(this.baseUrl + path);
  }
}
