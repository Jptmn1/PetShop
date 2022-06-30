package com.recup.apirec;

import javax.persistence.*;

import org.hibernate.annotations.Any;
@Entity
@Table(name = "produtos1")
public class model {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	@Column(name = "nome")
	private String nome;
	
	@Column(name = "preco" , length = 100)
	private int preco;
	@Lob
	@Column(name = "foto")
	private String foto;
	public model() {
	}
	public model(String nome, int preco, String foto) {
		this.nome = nome;
		this.preco = preco;
		this.foto = foto; 
	}
	public long getId() {
		return id; 
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public int getPreco() {
		return preco;
	}
	public void setPreco(int preco) {
		this.preco = preco;
	}
	public String getFoto() {
		return foto;
	}
	public void setFoto(String foto) {
		this.foto = foto;
	}
	@Override
	public String toString() {
		return "model [id=" + id + ", nome=" + nome + ", preço=" + preco + ", Foto=" + foto + "]";
	}
}