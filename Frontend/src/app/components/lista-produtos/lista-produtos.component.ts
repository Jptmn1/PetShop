import { Component, OnInit } from '@angular/core';
import { ModProduto } from 'src/app/models/mod-produto.model';
import { ServProdutoService } from 'src/app/services/serv-produto.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  produtos1?: ModProduto[];
  produtoAtual: ModProduto = {};
  indexAtual = -1;
  nome = '';
  constructor(private ProdServ: ServProdutoService) { }
  ngOnInit(): void {
    this.retrieveProducts();
  }
  retrieveProducts(): void {
    this.ProdServ.getAll()
      .subscribe({
        next: (data) => {
          this.produtos1 = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  refreshList(): void {
    this.retrieveProducts();
    this.produtoAtual = {};
    this.indexAtual = -1;
  }
  setActiveProduct(produto: ModProduto, index: number): void {
    this.produtoAtual = produto;
    this.indexAtual = index;
  }
  removeAllProducts(): void {
    this.ProdServ.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }
  searchNome(): void {
    this.produtoAtual = {};
    this.indexAtual = -1;
    this.ProdServ.findByNome(this.nome)
      .subscribe({
        next: (data) => {
          this.produtos1 = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
