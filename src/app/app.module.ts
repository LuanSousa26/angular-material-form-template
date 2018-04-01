import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppCompartilhadoModule} from './app-compartilhado/app-compartilhado.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './layout/navbar/menu.component';
import { CadastroService } from './cadastro/cadastro.service';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { PesquisaService } from './pesquisa/pesquisa.service';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    HomeComponent,
    MenuComponent,
    PesquisaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppCompartilhadoModule
  ],
  providers: [CadastroService,
    PesquisaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
