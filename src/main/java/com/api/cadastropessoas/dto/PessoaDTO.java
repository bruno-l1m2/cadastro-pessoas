package com.api.cadastropessoas.dto;

import org.hibernate.validator.constraints.br.CPF;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.time.LocalDate;

public class PessoaDTO {

    @NotBlank(message = "Informe o seu nome")
    private String nome;

    @NotBlank(message = "Informe o sua Data de Nascimento")
    private LocalDate dtNascimento;

    @NotBlank(message = "Informe o seu e-mail")
    @Email
    private String email;

    @NotBlank(message = "Informe o seu sexo")
    private String sexo;

    @NotBlank(message = "Informe o sua naturalidade")
    private String naturalidade;

    @NotBlank(message = "Informe o sua nacionalidade")
    private String nacionalidade;

    @NotBlank(message = "Informe o seu CPF")
    @CPF
    private String cpf;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public LocalDate getDtNascimento() {
        return dtNascimento;
    }

    public void setDtNascimento(LocalDate dtNascimento) {
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
