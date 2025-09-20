import React from 'react';
import './arvore.css';

function Arvore({nome, imagem, bioma, nomeC, descricao}){
    return (
        <div className="body-arv">
            <h1 className="nomeArv">{nome}</h1>
            <img src = {imagem} alt={nome} className="img-arv" />
            <h2 className="nomeC">Nome Científico: <span className="cientifico"><em>{nomeC}</em></span></h2>
            <h2 className="bioma">Bioma: {bioma}</h2>
            <h2 className="desc-arv">Curiosidade: {descricao}</h2> 
        </div>
    );
}

export default Arvore;