import { Component, Input, OnInit } from '@angular/core';
import { ServProdutoService } from 'src/app/services/serv-produto.service';
import { ActivatedRoute,Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ModProduto } from 'src/app/models/mod-produto.model';

const baseUrl = 'http://localhost:8080/api/produtos1';

@Component({
  selector: 'app-detalhes-prod',
  templateUrl: './detalhes-prod.component.html',
  styleUrls: ['./detalhes-prod.component.css']
})
export class DetalhesProdComponent implements OnInit {

  @Input() viewMode = false;
  @Input() produtoAtual: ModProduto = {
    nome: '',
    preco: '',
    foto: undefined,
  };

  message = '';
  constructor(
    private ProdServ: ServProdutoService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getProduct(this.route.snapshot.params["id"]);
    } 
  }
  getProduct(id: number): void {
    this.ProdServ.get(id)
      .subscribe({
        next: (data) => {
          this.produtoAtual = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
 
  updateProduct(): void {
    this.message = '';
    this.ProdServ.update(this.produtoAtual.id, this.produtoAtual)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
  deleteProduct(): void {
    this.ProdServ.delete(this.produtoAtual.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/produtos1']);
        },
        error: (e) => console.error(e)
      });
  }
}


