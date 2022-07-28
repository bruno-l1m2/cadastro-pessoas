package com.api.cadastropessoas.controller;

import com.api.cadastropessoas.dto.PessoaDTO;
import com.api.cadastropessoas.model.PessoaModel;
import com.api.cadastropessoas.service.PessoaService;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
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
        return ResponseEntity.status(HttpStatus.OK).body(service.listarPorId(id));
    }

    @GetMapping("/source")
    public ResponseEntity<?> source() {
        return ResponseEntity.status(HttpStatus.OK).body("https://github.com/bruno-l1m2/cadastro-pessoas.git");
    }

    @PostMapping()
    public ResponseEntity<Object> salvar(@RequestBody @Valid PessoaDTO pessoaDTO) {
        if (service.existsByCpf(pessoaDTO.getCpf())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Já existe este CPF cadastrado!");
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(service.salvar(pessoaDTO));
    }

    @PutMapping("/{id}")
    public ResponseEntity<PessoaModel> atualizar(@PathVariable(value= "id") Long id,
                                                @RequestBody @Valid PessoaDTO pessoaDTO){
        PessoaModel pessoa = service.atualizar(id, pessoaDTO);
        return new ResponseEntity<>(pessoa, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletar(@PathVariable("id") Long id) {
        service.deletar(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
