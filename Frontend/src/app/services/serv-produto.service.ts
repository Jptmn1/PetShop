import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModProduto } from '../models/mod-produto.model';

const baseUrl = 'http://localhost:8080/api/produtos1';

@Injectable({
  providedIn: 'root'
})
export class ServProdutoService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<ModProduto[]> {
    return this.http.get<ModProduto[]>(baseUrl);
  }
  get(id: number): Observable<ModProduto> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByNome(nome: any): Observable<ModProduto[]> {
    return this.http.get<ModProduto[]>(`${baseUrl}?nome=${nome}`);
  }
}
