/*import React from 'react';
import { Link } from 'react-router-dom';
import './Arvores.css';

function Arvores(){
    return(
        <div>
            <h1 className="body-arv">Lista de Arvores
                
                </h1><br /><br />
            <nav className="body-arv">
                <Link to="/IpeAmarelo" className="link">Ipê Amarelo</Link><br />
                <Link to="/IpeAmarelo" className="link">Ipê Amarelo</Link><br />
                <Link to="/IpeAmarelo" className="link">Ipê Amarelo</Link><br />
                <Link to="/IpeAmarelo" className="link">Ipê Amarelo</Link><br />
                <Link to="/IpeAmarelo" className="link">Ipê Amarelo</Link><br />
                <Link to="/IpeAmarelo" className="link">Ipê Amarelo</Link><br /><br /><br />
            </nav>
        </div>
    );
}

export default Arvores;*/

import React from 'react';
import { Link } from 'react-router-dom';
import './Arvores.css';

function Arvores() {
  return (
    <div className="arvores-container">
      <h1 className="arvores-title">Trilhas do Parque</h1>
      
      <nav className="arvores-lista">
        <Link to="/IpeAmarelo" className="arvore-link">Ipê Amarelo</Link>
        <Link to="/IpeAmarelo" className="arvore-link">Ipê Amarelo</Link>
        <Link to="/IpeAmarelo" className="arvore-link">Ipê Amarelo</Link>
        <Link to="/IpeAmarelo" className="arvore-link">Ipê Amarelo</Link>
        <Link to="/IpeAmarelo" className="arvore-link">Ipê Amarelo</Link>
        <Link to="/IpeAmarelo" className="arvore-link">Ipê Amarelo</Link>
      </nav>
    </div>
  );
}

export default Arvores;
