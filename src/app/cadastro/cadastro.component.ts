import {
  Component,
  OnInit
} from '@angular/core';
import {
  usuarioModel
} from './../models/usuarioModel';
import {
  CadastroService
} from './cadastro.service';
import {
  EnderecoModel
} from '../models/enderecoModel';
import {
  Observable
} from 'rxjs/Observable';
import {
  HttpResponse
} from '@angular/common/http';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: ['cadastro.scss']
})
export class CadastroComponent {
  usuario = new usuarioModel();
  str1 = '60a96f';
  str2 = '3c8ac5a0cbb277';
  str3 = '5gpolldsc999s02';
  str4 = 'bf4ef3a42df0';
  token = '90oop033c11120339www211';
  retorno: any;
  postRetorno: any;
  constructor(private cadastroService: CadastroService) {
      this.usuario.endereco = new EnderecoModel();
  }
  salvarDados() {
      this.cadastroService.salvarUsuario(this.usuario).subscribe(resposta => {
          this.postRetorno = resposta;
          console.log(resposta);
      });
      alert('Usuario Salvo!');
  }
  verificarCep() {
      if (this.usuario.endereco.cep !== '') {
          if (this.usuario.endereco.cep.includes('-')) {
              const cepV = /\-/gi;
              this.usuario.endereco.cep = this.usuario.endereco.cep.replace(cepV, '');
          }
          if (this.usuario.endereco.cep.length > 7) {
              this.cadastroService
                  .getCep(this.usuario.endereco.cep)
                  .subscribe((endereco) => {
                      this.usuario.endereco = endereco;
                  });
          }
      }
  }
  verificarCpf() {
      this.token = this.str1 + this.str2 + this.str4;
      if (this.usuario.cpf !== '') {
          if (this.usuario.cpf.includes('.')) {
              const cpfV = /\./gi;
              this.usuario.cpf = this.usuario.cpf.replace(cpfV, '');
              this.usuario.cpf = this.usuario.cpf.replace('-', '');
          }
          if (this.usuario.cpf.length > 10) {
              this.cadastroService.getValidarCpf(this.usuario.cpf, this.token).subscribe(resultado => {
                  this.retorno = resultado;
                  if (this.retorno.status === '1') {
                      this.usuario.cpf = this.retorno.data.number_formatted;
                  } else {
                      this.usuario.cpf = '';
                  }
              });
          }
      }
  }
}