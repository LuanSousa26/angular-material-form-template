import { Component, OnInit } from '@angular/core';
import { usuarioModel } from './../models/usuarioModel';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: ['cadastro.scss']
})
export class CadastroComponent {

    usuario = new usuarioModel();

    constructor() { }

    salvarDados()
    {
      console.log(`Nome: ${this.usuario.nome} CPF: ${this.usuario.cpf} Data de Nascimento: ${this.usuario.dataNascimento}  E-mail: ${this.usuario.email}`)
    }

    
  }
 