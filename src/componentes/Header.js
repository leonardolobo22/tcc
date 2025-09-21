import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="back-img">
      <header className="header">
      <div className="logo-title-container">
        <div className="logo">
          <img src="/icon_arvore.png" alt="Logo" className="logo-header" />
        </div>
        <div className="header-title">
          <p>PARQUE</p>
          <p>LAGOA</p>
          <p>DO GUAPÉ</p>
        </div>
      </div>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className="link" onClick={closeMenu}>Início</Link>
          <Link to="/admin" className="link" onClick={closeMenu}>Sobre o Parque</Link>
          <Link to="/ListaArvores" className="link" onClick={closeMenu}>Trilhas</Link>
          <Link to="/" className="link" onClick={closeMenu}>Educação Ambiental</Link>
          <Link to="/ListaArvores" className="link" onClick={closeMenu}>Galeria</Link>
          <Link to="/Hello" className="link" onClick={closeMenu}>Contato</Link>
          <button className="link-button" onClick={closeMenu}>
            <Link to="/Hello" className="link-button-int">Visite o Parque</Link>
          </button>
        </nav>

        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </header>
    </div>
  );
}

export default Header;
