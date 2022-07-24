package com.api.cadastropessoas.repository;

import com.api.cadastropessoas.model.PessoaModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PessoaRepository extends JpaRepository<PessoaModel, Long> {
    boolean existsByCpf(String cpf);
}
