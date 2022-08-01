import React from "react";
import './Item.css';
import { Link, useNavigate } from 'react-router-dom';
import api from "../../utils/api";
import moment from "moment";


const PessoaItem = ({pessoas}) =>{

    const navigate = useNavigate();
    const delete_item = (id) =>{
        api.delete(`/api/pessoa/${id}`)
        navigate('/');

    }
    return(
    <div className="item_info">
            <div className="item_List">
                <label className="titulo_info">
                    Id: 
                </label>
                <label className="item_dados">
                    {pessoas.id}
                </label>
            </div>
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
                        E-mail: 
                </label>
                <label className="item_dados">
                    {pessoas.email}
                </label>
            </div>
            <div className="item_List">
                <label className="titulo_info">
                        Data de Nascimento: 
                </label>
                <label className="item_dados">
                    {moment(pessoas.dtNascimento, "YYYY/MM/DD").format("DD/MM/YYYY")}
                </label>
                </div>
                <div className="item_List">
                <label className="titulo_info">
                    CPF: 
                </label>
                <label className="item_dados" onBlur={"ValidaCPF();"}>
                    {pessoas.cpf}
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


