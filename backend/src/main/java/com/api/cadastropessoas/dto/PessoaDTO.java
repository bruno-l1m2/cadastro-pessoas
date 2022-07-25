package com.api.cadastropessoas.dto;

import org.hibernate.validator.constraints.br.CPF;
import javax.validation.constraints.*;


public class PessoaDTO {

    @NotBlank(message = "Nome é obrigatório.")
    @Size(min=2, max=30, message = "Campo nome deve ter entre 2 e 30 caracteres.")
    private String nome;

    @NotBlank(message = "Data de Nascimento é obrigatório no formato dd/MM/yyyy.")
    private String dtNascimento;

    @Email
    private String email;

    private String sexo;

    private String naturalidade;

    private String nacionalidade;

    @NotBlank(message = "CPF é obrigatório.")
    @CPF
    private String cpf;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDtNascimento() {

        return dtNascimento;
    }

    public void setDtNascimento(String dtNascimento) {

        this.dtNascimento = dtNascimento;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public String getNaturalidade() {
        return naturalidade;
    }

    public void setNaturalidade(String naturalidade) {
        this.naturalidade = naturalidade;
    }

    public String getNacionalidade() {
        return nacionalidade;
    }

    public void setNacionalidade(String nacionalidade) {
        this.nacionalidade = nacionalidade;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

}
