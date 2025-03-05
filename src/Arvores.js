import React from 'react';
import { Link } from 'react-router-dom';

function Arvores(){
    return(
        <div>
            <h1>teste</h1><br /><br /> <br />
            <nav>
                <Link to="/IpeAmarelo" className="link">Ipê Amarelo</Link>
            </nav>
        </div>
    );
}

export default Arvores;