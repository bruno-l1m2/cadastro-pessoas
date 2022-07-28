import React from "react";
import './Item.css';
import { Link } from 'react-router-dom';
import api from "../../utils/api";


const PessoaItem = ({pessoas}) =>{
    
    
    const delete_item = (id) =>{
        api.delete(`/api/pessoa/${id}`)
    }

    
    return(
    <div className="item_info">
            <div className="item_List">
                <label className="titulo_info">
                    Nome: 
                </label>
                <label className="item_dados">
                    {pessoas.nome}
                </label>
            </div>
            <div className="item_List">
                <label className="titulo_info">
                    CPF: 
                </label>
                <label className="item_dados">
                    {pessoas.cpf}
                </label> 
            </div>
            <div className="item_List">
                <label className="titulo_info">
                        Data de Nascimento: 
                </label>
                <label className="item_dados">
                    {pessoas.dtNascimento}
                </label>
            </div>
            <div className="item_List">
                <label className="titulo_info">
                        E-mail: 
                </label>
                <label className="item_dados">
                    {pessoas.email}
                </label>
            </div>
            <div className="item_List">
                <label className="titulo_info">
                        Sexo: 
                </label>
                <label className="item_dados">
                    {pessoas.sexo}
                </label>  
            </div>
            <div className="item_List">
                <label className="titulo_info">
                    Naturalidade: 
                </label>
                <label className="item_dados">
                    {pessoas.naturalidade}
                </label>
            </div>
            <div className="item_List">
                <label className="titulo_info">
                    Nacionalidade: 
                </label>
                <label className="item_dados">
                    {pessoas.nacionalidade}
                </label>
            </div>
            <div className="item_button">
                <Link className="editar-Link" to={`/atualizar/${pessoas.id}`}>Editar</Link>
                <button className="excluir-button" onClick={() => delete_item(pessoas.id)}>Excluir</button>
            </div>        
    </div>
    )
}
export default PessoaItem;


