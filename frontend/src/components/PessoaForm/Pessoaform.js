import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import axios from "axios";
import { useParams, useNavigate} from 'react-router-dom';
import './Pessoaform.css';
import moment from "moment";

const PessoaForm = ({id}) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [dtNasc, setDtNasc] = useState("");
  const [dtNascimento, setDtNascimento] = useState("");
  const [sexo, setSexo] = useState("");
  const [naturalidade, setNaturalidade] = useState("");
  const [nacionalidade, setNacionalidade] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const handleSubmit = async (event) => {
      event.preventDefault();
      if (!nome) {
        alert("Nome é um campo obrigatório.");
        return;
      } else if (!email) {
        alert("E-mail é um campo obrigatório.");
        return;
      } else if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        alert("Insira um e-mail válido.");
        return;
      } else if (!cpf) {
        alert("Cpf é um campo obrigatório.");
        return;
      } else if (!dtNascimento) {
        alert("Data de Nascimento é um campo obrigatório.");
        return;
      } 
      if (params.id) {
        api.put(`/api/pessoa/${params.id}`, 
          {
            nome: nome,
            dtNascimento: dtNascimento,
            email: email,
            sexo: sexo,
            naturalidade: naturalidade,
            nacionalidade: nacionalidade,
            cpf : cpf
          }
          ).then(() => {
            alert("Registro atualizado com sucesso!");
            navigate('/list');
          }
            ).catch((error) => {
              alert(error.response.data);
          });
        } else {
            axios.post('http://localhost:8080/api/pessoa/', {
              nome: nome,
              dtNascimento: dtNascimento,
              email: email,
              sexo: sexo,
              naturalidade: naturalidade,
              nacionalidade: nacionalidade,
              cpf : cpf,
              })
            .then((response) => {
                alert("Cadastro realizado com sucesso!!");
                navigate('/list');
            }).catch((response) =>{
                alert('Desculpe o transtorno. Estamos resolvendo o problema.');
            })
    }}
  useEffect(() => {
    if (params.id) {
      api.get(`/api/pessoa/${params.id}`).then((response) => {
        setNome(response.data.nome);
        setEmail(response.data.email);
        setCpf(response.data.cpf);
        setDtNascimento(response.data.dtNascimento);
        setNacionalidade(response.data.nacionalidade);
        setNaturalidade(response.data.naturalidade);
        setSexo(response.data.sexo);
      }).catch((response) => {
        console.log(response.date);
        alert("GET Desculpe o transtorno. Estamos resolvendo o problema.");
      });
    }
  }, [params]);
  const handleCancel = () => {
      alert("As alterações preenchidas não serão gravadas.")
        navigate("/");
  }
  return (
  <div>
    <h1>Formulário</h1>
    <h2>Nova Pessoa</h2>
  <form onSubmit={handleSubmit}>
      <div className="pessoa-form-grupo">
        <div className="pessoa-form-item">
          <input 
              disableFuture
              required
              id="nome"
              label="Nome Completo"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}          
          />  
        </div>
        <div className="pessoa-form-item">
          <input 
              disableFuture
              required
              id="cpf"
              label="CPF"
              placeholder="CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}          
          />
        </div>
        <div className="pessoa-form-item">
          <input 
              disableFuture
              required
              id="email"
              label="Email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}       
          />
        </div>
        <div className="pessoa-form-item">
          <input 
            className="pessoa-form-dtNasc"
            disableFuture
            type="text"
            id="dtNasc"
            label="Data de Nascimento"
            placeholder="dd/mm/aaaa"
            openTo="day"
            views={["day","month","year"]}
            value={dtNascimento}
            dateFormat="dd/MM/yyyy"
            onChange={(e) => setDtNascimento(e.target.value)}
            />
        </div>
        <div className="pessoa-form-item">
          <input 
            className="pessoa-form-nat"
            disableFuture
            required
            id="sexo"
            label="sexo"
            placeholder="sexo"
            value={sexo}
            onChange={(e) => setSexo(e.target.value)}          
        />
        </div>
        <div className="pessoa-form-item">
          <input 
            className="pessoa-form-nat"
            disableFuture
            required
            id="naturalidade"
            label="Naturalidade"
            placeholder="Naturalidade"
            value={naturalidade}
            onChange={(e) => setNaturalidade(e.target.value)}          
        />
        </div>
        <div className="pessoa-form-item">
            <input 
            disableFuture
            required
            id="nacionalidade"
            label="Nacionalidade"
            placeholder="Nacionalidade"
            value={nacionalidade}
            onChange={(e) => setNacionalidade(e.target.value)}          
            />
        </div>
        <div className="div-button">
          <button className="button-cadastrar" onClick={handleSubmit}>
            Cadastrar
          </button>
          <button type="submit" className="button-voltar" onClick={handleCancel}>
            Voltar
          </button>
        </div>
      </div>                
    </form>
  </div>
  );
};

export default PessoaForm;