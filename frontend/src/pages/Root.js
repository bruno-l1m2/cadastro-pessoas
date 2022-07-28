import React from "react";
import PageSearch from "./Search/Search";
import PageForm from "./Form/Form";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const Root = () => {
    return(
        <Router>
            <Routes>
                <Route path="/list" element={<PageSearch/>} />
                <Route path="/cadastro" element={<PageForm/>} />
                <Route path="/atualizar/:id" element={<PageForm/>} />
                <Route path="/" exact element={<PageSearch/>} />
            </Routes>
        </Router>
    );
}

export default Root;