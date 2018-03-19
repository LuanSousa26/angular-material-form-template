import { Injectable } from '@angular/core';
import{Http,Response} from '@angular/http';

@Injectable()
export class CadastroService {
  http: any;

  constructor() { }

  public apiUrl="";

  getDados()
  {
    return this.http.get(this.apiUrl)
    .map((res:Response)=>res.json());

  }

}
