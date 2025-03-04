import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(){
    return(
        <header className="header">
            <div className="logo">
                <img src="/logo192.png" alt="Logo" className="logo-header" />
            </div>
            <nav className="nav">
                <Link to="/" className="link">Início</Link>
                <Link to="/ListaArvores" className="link">Lista Arvores</Link>
                <Link to="/Hello" className="link">Hello</Link>
            </nav>
        </header>
    );
}

export default Header;