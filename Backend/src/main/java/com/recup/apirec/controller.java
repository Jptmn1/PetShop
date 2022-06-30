package com.recup.apirec;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.recup.apirec.model;
import com.recup.apirec.repositorio;
import com.recup.apirec.ApirecApplication;
import com.recup.apirec.WebConfig;

@CrossOrigin(origins = "http://localhost:8080", maxAge = 3600, allowCredentials="true" )

@RestController
@RequestMapping("/api")
public class controller {
  @Autowired
  repositorio Rec_Repository;
  @GetMapping("/produtos1")
  public ResponseEntity<List<model>> getAllProducts(@RequestParam(required = false) String nome, String foto) {
    try {
      List<model> produtos1 = new ArrayList<model>();
      if (nome == null)
        Rec_Repository.findAll().forEach(produtos1::add);
      else
        Rec_Repository.findBynome(nome).forEach(produtos1::add);
      if (produtos1.isEmpty()) {
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
      }
      return new ResponseEntity<>(produtos1, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @GetMapping("/produtos1/{id}")
  public ResponseEntity<model> getProductById(@PathVariable("id") long id) {
    Optional<model> tutorialData = Rec_Repository.findById(id);
    if (tutorialData.isPresent()) {
      return new ResponseEntity<>(tutorialData.get(), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }
  @PostMapping("/produtos1")
  public ResponseEntity<model> createProduct(@RequestBody model modelpro) {
    try {
      model _model = Rec_Repository
          .save(new model(modelpro.getNome(), modelpro.getPreco(), modelpro.getFoto()));
      return new ResponseEntity<>(_model, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @PutMapping("/produtos1/{id}")
  public ResponseEntity<model> updateProducts(@PathVariable("id") long id, @RequestBody model modelpro) {
    Optional<model> tutorialData = Rec_Repository.findById(id);
    if (tutorialData.isPresent()) {
      model _model = tutorialData.get();
      _model.setNome(modelpro.getNome());
      _model.setPreco(modelpro.getPreco());
      _model.setFoto(modelpro.getFoto());
      return new ResponseEntity<>(Rec_Repository.save(_model), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }
  @DeleteMapping("/produtos1/{id}")
  public ResponseEntity<HttpStatus> deleteProduct(@PathVariable("id") long id) {
    try {
      Rec_Repository.deleteById(id);
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @DeleteMapping("/produtos1")
  public ResponseEntity<HttpStatus> deleteAllProducts() {
    try {
      Rec_Repository.deleteAll();
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  

}