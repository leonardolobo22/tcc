import React from 'react';
import Arvore from '../componentes/arvore';

function IpeAmarelo(){
    return(       
        <div>
            <Arvore 
                nome="Ipê Amarelo" imagem="./logo192.png" bioma="Mata Atlântica" nomeC="Ipis Amarelus"
                descricao=
                {`             
                TESTE           
                TEST                 
                TESTE
                TESTE
                TESTE                    
                TESTE                    
                TESTE                    
                TESTE                    
                TESTE            
                TESTE`}
            />
        </div>
    );
}

export default IpeAmarelo;