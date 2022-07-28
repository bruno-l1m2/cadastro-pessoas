
import React, { useEffect, useState } from "react";
import CarregarList from '../List/List';
import './ListPessoas.css';
import { Link } from 'react-router-dom';
import axios from'axios';

const ListPessoas = ({id}) =>{
    const[pessoas, setPessoas] = useState([]);
    const[search, setSearch] =   useState('');
    const params = {};
    if (search){
        params = search;
    }
    

    useEffect(() => {
        axios.get('http://localhost:8080/api/pessoa', { params })
        .then((response) => {
            setPessoas(response.data);
        }); 
    },[search]);
    return (
        <div className="comp-search">
            <header className="comp-search-header">
                <h1>Listas de Pessoas</h1>
                <Link className="comp-cadastro" to="/cadastro">Novo Cadastro</Link>
            </header>
            <div className="comp-list">
                <CarregarList pessoas={pessoas} loading={!pessoas.length} />
            </div>
        </div>
    );
}
export default ListPessoas;