import React from 'react';

function Arvore({nome, bioma}){
    return (
        <div>
            <h2>{nome}</h2>
            <p>Bioma: {bioma}</p>
        </div>
    )
}

export default Arvore;