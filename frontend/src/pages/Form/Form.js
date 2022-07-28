import React from "react";
import { useParams } from "react-router-dom";
//import PessoaFrom from "../../components/Form/Form";
import UIContainer from "../../components/UI/Container/Container";
import PessoaForm from "../../components/PessoaForm/Pessoaform";

const PageForm = () =>{
    const { id } = useParams();
    return(

        <div>
            <UIContainer> 
                <PessoaForm id = {id ? Number.parseInt(id, 10) : null} />
            </UIContainer>
        </div>

    );
}

export default PageForm