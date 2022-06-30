import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModProduto } from 'src/app/models/mod-produto.model';
import { ServProdutoService } from 'src/app/services/serv-produto.service';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent implements OnInit {

  @ViewChild('fileInput')
  fileInput!: ElementRef

  produto: ModProduto = {
    nome: '',
    preco: '',
    foto: undefined,
  };
  submitted = false;
  constructor(private ProdServ: ServProdutoService) { }
  ngOnInit(): void {
  }
  saveProduct(): void {
    const data = {
      nome: this.produto.nome,
      preco: this.produto.preco,
      foto: this.produto.foto,
    };
    this.ProdServ.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newProduct(): void {
    this.submitted = false;
    this.produto = {
      nome: '',
      preco: '',
      foto: undefined
    };
  }

  

}


