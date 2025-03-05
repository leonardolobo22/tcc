import React from 'react';
import './App.css';

function Arvore({nome, imagem, bioma, descricao}){
    return (
        <div className="body-arv">
            <h1 classsName="nomeArv">{nome}</h1>
            <img src = {imagem} alt={nome} className="img-arv" />
            <h2 className="Bioma">Bioma: {bioma}</h2>
            <p className="desc-arv">{descricao}</p> 
        </div>
    );
}

export default Arvore;