import { EnderecoModel } from './enderecoModel';
export class usuarioModel {

    nome?: string;
    cpf?: string;
    dataNascimento?: Date;
    email?: string;
    endereco?: EnderecoModel;
    constructor() {

    }
}