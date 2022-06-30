package com.recup.apirec;


import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.Repository;
import com.recup.apirec.model;


public interface repositorio extends JpaRepository<model, Long> {
  
  List<model> findBynome(String nome);
}