import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(){
    return(
        <div className="back-img" style={{backgroundImage: `url("/img-trilha.jpg")`}}>
        <header className="header">
            <div className="logo">
                <img src="/logo192.png" alt="Logo" className="logo-header" />
            </div>
            <nav className="nav">
                <Link to="/" className="link">Início</Link>
                <Link to="/Arvores" className="link">Arvores</Link>
                <Link to="/Hello" className="link">Hello</Link>
                <Link to="/" className="link">Início</Link>
                <Link to="/Arvores" className="link">Arvores</Link>
                <Link to="/Hello" className="link">Hello</Link>
            </nav>
        </header>
        </div>
    );
}

export default Header;