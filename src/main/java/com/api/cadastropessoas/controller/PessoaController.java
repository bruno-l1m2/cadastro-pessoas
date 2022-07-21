package com.api.cadastropessoas.controller;

import com.api.cadastropessoas.dto.PessoaDTO;
import com.api.cadastropessoas.model.PessoaModel;
import com.api.cadastropessoas.service.PessoaService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/pessoa")
public class PessoaController {

    @Autowired
    private PessoaService service;

    @GetMapping()
    public ResponseEntity<List<PessoaModel>> listar() {
        return new ResponseEntity<>(service.listar(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PessoaModel> listarPorId(@PathVariable("id") Long id) {
        return new ResponseEntity<>(service.listarPorId(id), HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<PessoaModel> salvar(@RequestBody @Valid PessoaDTO pessoaDTO) {
        PessoaModel pessoa = new PessoaModel();
        BeanUtils.copyProperties(pessoaDTO, pessoa);
        pessoa.setDtCadastro(LocalDate);
        return ResponseEntity.status(HttpStatus.CREATED).body(service.salvar(pessoa));
    }

}
