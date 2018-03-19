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
      
    }

    
  }
 