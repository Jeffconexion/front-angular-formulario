import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estado, Municipio } from './brasilapi.models';
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

  listarMunicipios(uf: string): Observable<Municipio[]> {
    const path = '/ibge/municipios/v1/' + uf
    return this._httpCliente.get<Municipio[]>(this.baseUrl + path);
  }
}
