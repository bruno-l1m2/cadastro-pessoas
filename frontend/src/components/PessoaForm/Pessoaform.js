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
  const [dtNascimento, setDtNascimento] = useState("");
  const [sexo, setSexo] = useState("");
  const [naturalidade, setNaturalidade] = useState("");
  const [nacionalidade, setNacionalidade] = useState("");

  const navigate = useNavigate();
  const params = useParams();
  
  const opSexo = ['Masculino','Feminino','Outro']
  const opNac = ['Brasil','China','Estados Unidos','Outros']
  const opNat = ['Paulista','Brasiliense','Outro']


  
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
        api.put(`/api/pessoa/${params.id}`, {
          nome: nome,
          dtNascimento: dtNascimento,
          email: email,
          sexo: sexo,
          naturalidade: naturalidade,
          nacionalidade: nacionalidade,
          cpf : cpf
            }).then(() => {
            alert("Registro atualizado com sucesso!");
            navigate('/');
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
              cpf : cpf
            })
            .then((response) => {
                alert("Cadastro realizado com sucesso!!");
                navigate('/');
            }).catch((error) =>{
                alert('Desculpe o transtorno. Estamos resolvendo o problema.');
                console.log(error);
            })
    }}
    useEffect(() => {
      if (params.id) {
        api.get(`/api/pessoa/${params.id}`).then((response) => {
          setNome(response.data.nome);
          setEmail(response.data.email);
          setCpf(response.data.cpf);
          setNacionalidade(response.data.nacionalidade);
          setNaturalidade(response.data.naturalidade);
          setSexo(response.data.sexo);
          setDtNascimento(moment(response.data.dtNascimento, 'YYYY,MM,DD').format('DD/MM/YYYY'));
        }).catch((response) => {
          console.log(response.date);
          alert("Desculpe o transtorno. Estamos resolvendo o problema.");
        });
      }
    }, [params]);

  const handleCancel = () => {
      alert("Os campos preenchidos serão cancelados!");
        navigate("/");
  }

  return (
  <div>
    <h1>Formulário</h1>
    <h2>Cadastro de Pessoa</h2>
  <form onSubmit={handleSubmit}>
      <div className="pessoa-form-grupo">
        <div className="pessoa-form-item">
          <input 
              disableFuture
              required
              autoComplete="off"
              name="nome"
              label="Nome Completo"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}          
          />  
        </div>
        <div className="pessoa-form-item">
         <input
                disableFuture
                className={"p-inputtext-sm"}
                id="cpf"
                mask = {"999.999.999-99"}
                placeholder="CPF"
                maxLength="11"
                autoComplete="off"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
        </div>
        <div className="pessoa-form-item">
          <input 
              autoComplete="off"
              id="email"
              label="Email"
              placeholder="E-mail"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              value={email}
              onChange={(e) => setEmail(e.target.value)}       
          />
        </div>
        <div className="pessoa-form-item">
                <input 
                  type="text"
                  name="DataNascimento"
                  value={dtNascimento}
                  maxLength="10"
                  autoComplete="off"
                  placeholder="DD/MM/YYYY"
                  onChange={(e) => setDtNascimento(e.target.value)}
                />
        </div> 
        <div className="pessoa-form-item">
        <select 
          name="sexo"
          id="sexo"
          label="sexo"
          value={sexo}
          onChange={(e) => setSexo(e.target.value)}
        >
          <option value= "Sexo" selected> Sexo </option>
          <option value={opSexo[0]}> {opSexo[0]} </option>
          <option value={opSexo[1]}>{opSexo[1]}</option>
          <option value={opSexo[2]}>{opSexo[2]}</option>
        </select>
        </div>
        <div className="pessoa-form-item">
        <select 
          name="nacionalidade"
          label="nacionalidade"
          value={nacionalidade}
          onChange={(e) => setNacionalidade(e.target.value)}
        >
          <option value= "nacionalidade" selected>Nacionalidade</option>
          <option value={opNac[0]}>{opNac[0]}</option>
          <option value={opNac[1]}>{opNac[1]}</option>
          <option value={opNac[2]}>{opNac[2]}</option>
        </select>
        </div>
        <div className="pessoa-form-item">
        <select 
          name="naturalidade"
          label="naturalidade"
          onChange={(e) => setNacionalidade(e.target.value)}
        > <option value= "naturalidade" selected>Naturalidade</option>
          <option value={opNat[0]}>{opNat[0]}</option>
          <option value={opNat[1]}>{opNat[1]}</option>
          <option value={opNat[2]}>{opNat[2]}</option>
        </select>
        </div>
        <div className="div-button">
          <button 
            className="button-cadastrar" 
            onClick={handleSubmit}>
              Cadastrar
          </button>
          <button 
            type="submit" 
            className="button-voltar" 
            onClick={handleCancel}>
              Cancelar
          </button>
        </div>
      </div>                
    </form>
  </div>
  );
};

export default PessoaForm;