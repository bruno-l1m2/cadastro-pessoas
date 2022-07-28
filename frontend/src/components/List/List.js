import React from "react";
import PessoaItem from "../PessoaItem/Item";
import './List.css';


const CarregarList = ({Loading, pessoas}) => {
    if (Loading) {
        return <div>Carregando...</div>;
    }
    return(
        <div className="list-div" >
            {pessoas.map((pessoas) => (
                <PessoaItem pessoas={pessoas}/>
            ))}
        </div>
    )
}

export default CarregarList;
