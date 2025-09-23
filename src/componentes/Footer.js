import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer(){
    return(
        <header className="header2">
            <nav className="nav2">
                <Link to="/" className="link2">Início</Link>
                <Link to="/ListaArvores" className="link2">Lista Arvores</Link>
                <Link to="/Hello" className="link2">Hello</Link>
                <Link to="/" className="link2">Início</Link>
                <Link to="/admin" className="link2" >Administrador</Link>
            </nav>
            <p className="link2">Total de Visitas: &nbsp;</p>
            <div id="sfcac28k3nap5e9u6yyqx3xkgn34sn5gk5u">
                <script type="text/javascript" src="https://counter5.optistats.ovh/private/counter.js?c=ac28k3nap5e9u6yyqx3xkgn34sn5gk5u&down=async" async></script>
                <noscript>
                    <a href="https://www.webcontadores.com" title="contador de visitas html">
                        <img src="https://counter5.optistats.ovh/private/webcontadores.php?c=ac28k3nap5e9u6yyqx3xkgn34sn5gk5u" border="0" title="contador de visitas html" alt="contador de visitas html" />
                    </a>
                </noscript>
            </div>
        </header>
    );
}

export default Footer;