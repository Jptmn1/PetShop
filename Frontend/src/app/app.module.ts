import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Material/material.module';
import { NovoProdutoComponent } from './components/novo-produto/novo-produto.component';
import { DetalhesProdComponent } from './components/detalhes-prod/detalhes-prod.component';
import { ListaProdutosComponent } from './components/lista-produtos/lista-produtos.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServProdutoService } from './services/serv-produto.service';
import { LoginComponent } from './components/back/login/login.component';
import { RegisterComponent } from './components/back/register/register.component';
import { HomeComponent } from './components/back/home/home.component';
import { ProfileComponent } from './components/back/profile/profile.component';
import { BoardAdminComponent } from './components/back/board-admin/board-admin.component';

import { AuthInterceptor, authInterceptorProviders } from 'src/_helper/auth.interceptor';
import { httpInterceptorProviders} from 'src/_helper/http.interceptor'

@NgModule({
  declarations: [
    AppComponent,
    NovoProdutoComponent,
    DetalhesProdComponent,
    ListaProdutosComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ServProdutoService, authInterceptorProviders, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
