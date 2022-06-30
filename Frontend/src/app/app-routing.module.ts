import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProdutosComponent } from './components/lista-produtos/lista-produtos.component';
import { DetalhesProdComponent } from './components/detalhes-prod/detalhes-prod.component';
import { NovoProdutoComponent } from './components/novo-produto/novo-produto.component';
import { ModProduto } from './models/mod-produto.model';
import { RegisterComponent } from './components/back/register/register.component'; 
import { LoginComponent } from './components/back/login/login.component'; 
import { HomeComponent } from './components/back/home/home.component'; 
import { ProfileComponent } from './components/back/profile/profile.component'; 
 
import { BoardAdminComponent } from './components/back/board-admin/board-admin.component'; 

const routes: Routes = [
//{path: '', redirectTo: 'produtos1', pathMatch: 'full'},
{path: 'produtos1',component: ListaProdutosComponent},
{path: 'produtos1/:id', component: DetalhesProdComponent},
{path: 'home/:id', component: DetalhesProdComponent},
{path: 'add', component: NovoProdutoComponent},
{ path: 'home', component: ListaProdutosComponent },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'profile', component: ProfileComponent },
{ path: 'admin', component: BoardAdminComponent },
{ path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
