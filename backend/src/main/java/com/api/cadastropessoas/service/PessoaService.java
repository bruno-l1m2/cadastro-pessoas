package com.api.cadastropessoas.service;

import com.api.cadastropessoas.dto.PessoaDTO;
import com.api.cadastropessoas.repository.PessoaRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.api.cadastropessoas.model.PessoaModel;
import javax.persistence.EntityNotFoundException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
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
                .orElseThrow(() -> new EntityNotFoundException("Não há pessoa com este Id "+id));
    }

    public PessoaModel salvar(PessoaDTO pessoaDTO) {
        PessoaModel pessoaModel = new PessoaModel();
        var data = LocalDateTime.now();
        LocalDate dtNasc = verificardtNasc(pessoaDTO.getDtNascimento());
        BeanUtils.copyProperties(pessoaDTO, pessoaModel);
        pessoaModel.setDtNascimento(dtNasc);
        pessoaModel.setDtCadastro(data);
        pessoaModel.setDtAlteracao(data);
        return repository.save(pessoaModel);
    }

    public boolean existsByCpf(String cpf) {
        return repository.existsByCpf(cpf);
    }

    private LocalDate verificardtNasc(String dtNascimentoStr) throws DateTimeParseException {
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        return LocalDate.parse(dtNascimentoStr, dateTimeFormatter);
    }

    public PessoaModel atualizar(Long id, PessoaDTO pessoaDTO){
        PessoaModel pessoa = this.repository.findById(id).orElseThrow(() ->
                new EntityNotFoundException("Não há pessoa com este Id "+id));
        LocalDate dtNasc = verificardtNasc(pessoaDTO.getDtNascimento());
        pessoa.setNome(pessoaDTO.getNome());
        pessoa.setSexo(pessoaDTO.getSexo());
        pessoa.setEmail(pessoaDTO.getEmail());
        pessoa.setDtNascimento(dtNasc);
        pessoa.setNaturalidade(pessoaDTO.getNaturalidade());
        pessoa.setNacionalidade(pessoaDTO.getNacionalidade());
        pessoa.setCpf(pessoaDTO.getCpf());
        pessoa.setDtAlteracao(LocalDateTime.now());
        repository.save(pessoa);
        return pessoa;

    }

    public void deletar(Long id) {
        listarPorId(id);
        repository.deleteById(id);
    }

}
