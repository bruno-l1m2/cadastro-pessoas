package com.api.cadastropessoas.service;

import com.api.cadastropessoas.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.api.cadastropessoas.model.PessoaModel;
import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class PessoaService {

    @Autowired
    private PessoaRepository repository;

    public List<PessoaModel> listar() {
        return repository.findAll();
    }

    public PessoaModel listarPorId(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Pessoa não encontrada "+id));
    }

    public PessoaModel salvar(PessoaModel pessoa) {
        return repository.save(pessoa);
    }


}
