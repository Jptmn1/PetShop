import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModProduto } from 'src/app/models/mod-produto.model';
import { ServProdutoService } from 'src/app/services/serv-produto.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  @ViewChild('fileInput')
  fileInput!: ElementRef

  produto: ModProduto = {
    nome: '',
    preco: '',
    foto: undefined,
  };
  submitted = false;

  content?: string;
  constructor(private userService: UserService , private ProdServ: ServProdutoService) { }
  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        this.content = JSON.parse(err.error).message;
      }
    });
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