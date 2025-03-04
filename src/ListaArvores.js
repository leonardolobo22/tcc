import { useState, useEffect } from 'react';

function ListaArvores(){
    const [arvores, setArvores] = useState([]);

    useEffect(() => {
        fetch("./dados.json")
            .then(res => res.json())
            .then(data => setArvores(data));
    }, []);

    return (
        <div>
            {arvores.map(arvore => (
                <h2 key={arvore.id}>{arvore.nome} - {arvore.bioma}</h2>
            ))}
        </div>
    )
}

export default ListaArvores;
