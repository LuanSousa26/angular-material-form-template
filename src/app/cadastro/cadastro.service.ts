import {
  Injectable
} from '@angular/core';
import {
  Http,
  Response
} from '@angular/http';
import 'rxjs/add/operator/map';
import {
  HttpClient,
  HttpResponse
} from '@angular/common/http';
import {
  Observable
} from 'rxjs/Observable';
import {
  usuarioModel
} from './../models/usuarioModel';
export type EntityResponseType = HttpResponse < usuarioModel > ;
@Injectable()
export class CadastroService {

  constructor(private http: HttpClient) {}

  private urlCep = 'https://viacep.com.br/ws';
  private urlCpf = 'http://geradorapp.com/api/v1/cpf/validate';
  private urlPost = 'http://demo4677424.mockable.io/usuarios/';

  salvarUsuario(usuario: usuarioModel): Observable < EntityResponseType > {
      return this.http.post < usuarioModel > (this.urlPost, usuario, {
          observe: 'response'
      });
  }
  getCep(cep: string) {
      return this.http.get(`${this.urlCep}/${cep}/json/`);
  }
  getValidarCpf(cpf: string, tk: string) {
      return this.http.get(`${this.urlCpf}/${cpf}?token=${tk}`);
  }

}
