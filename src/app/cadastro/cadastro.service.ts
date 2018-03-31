import { Injectable } from '@angular/core';
import{Http,Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CadastroService {

  constructor(private http : HttpClient ) {}

  private urlCep ='https://viacep.com.br/ws';
  private urlCpf = 'http://geradorapp.com/api/v1/cpf/validate'

  getCep(cep : string) {
    return this.http.get(`${this.urlCep}/${cep}/json/`);
  }
  getValidarCpf(cpf : string, tk : string){
      return this.http.get(`${this.urlCpf}/${cpf}?token=${tk}`);
  }

}
