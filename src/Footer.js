import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer(){
    return(
        <div className= "back-img2" style={{backgroundImage: `url("/img-trilha.jpg")`}}>
        <header className="header2">
            <nav className="nav2">
                <Link to="/" className="link2">Início</Link>
                <Link to="/ListaArvores" className="link2">Lista Arvores</Link>
                <Link to="/Hello" className="link2">Hello</Link>
                <Link to="/" className="link2">Início</Link>
                <Link to="/ListaArvores" className="link2">Lista Arvores</Link>
                <Link to="/Hello" className="link2">Hello</Link>
            </nav>
        </header>
        </div>
    );
}

export default Footer;