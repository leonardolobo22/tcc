import React, { useState, useEffect } from "react"; // importa useState e useEffect
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { auth } from "./firebaseConfig"; // importa o auth do Firebase
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import IpeAmarelo from './pages/IpeAmarelo';
import Admin from './pages/admin';
import LoginForm from './pages/LoginForm';
import "./App.css";
import ArvorePage from "./componentes/arvore";
import ListaArvores from "./ListaArvores";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ListaArvores" element={<ListaArvores/>} />
        <Route path="/IpeAmarelo/" element={<IpeAmarelo />} />
        <Route path="/arvore/:id" element={<ArvorePage />} />
        <Route path="/LoginForm" element={<LoginForm />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function Home() {
  return (
    <div>
      <div className="back-img-home">
        <div className="img1-home" alt="Imagem Lagoa do Guapé">
          <h1>Parque Municipal Luiz Balboni</h1>
          <h3>
            Situado na cidade de São Miguel Arcanjo, portal da Mata Atlântica, abriga grande variedade de fauna e flora
          </h3>
          <button className="button-SaibaMais"><strong>Saiba Mais</strong></button>
        </div>
      </div>

      <div className="tres-img">
        <div className="tres-img-1">
          <img src="" alt="Imagem Informativa 1" /><br />
          <button className="button-SaibaMais"><strong>Saiba Mais</strong></button>
        </div>
        <div className="tres-img-2">
          <img src="" alt="Imagem Informativa 2" /><br />
          <button className="button-SaibaMais"><strong>Saiba Mais</strong></button>
        </div>
        <div className="tres-img-3">
          <img src="" alt="Imagem Informativa 3" /><br />
          <button className="button-SaibaMais"><strong>Saiba Mais</strong></button>
        </div>
      </div>

      <div className="seis-person-1">
        <div className="perfil-card">
          <img src="/image.png" alt="Imagem pessoa 1" />
          <p>Ana Laura</p>
          <p>Desenvolvedora</p>
        </div>
        <div className="perfil-card">
          <img src="/image.png" alt="Imagem pessoa 2" />
          <p>Jade</p>
          <p>Desenvolvedora</p>
        </div>
        <div className="perfil-card">
          <img src="/image.png" alt="Imagem pessoa 3" />
          <p>Leonardo</p>
          <p>Desenvolvedor</p>
        </div>
      
        <div className="perfil-card">
          <img src="/image.png" alt="Imagem pessoa 4" />
          <p>Sabrina</p>
          <p>Desenvolvedora</p>
        </div>
      </div>

      <div className="seis-person-2">
        <div className="perfil-card">
          <img src="/image.png" alt="Imagem pessoa 5" />
          <p>Ademir</p>
          <p>Orientador</p>
        </div>
        <div className="perfil-card">
          <img src="/image.png" alt="Imagem pessoa 6" />
          <p>Danilo</p>
          <p>Orientador</p>
        </div>
      </div>
    </div>
  );
}

export default App;
