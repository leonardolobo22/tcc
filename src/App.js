import React, { useState, useEffect } from "react"; // importa useState e useEffect
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { auth } from "./firebaseConfig"; // importa o auth do Firebase
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import ContactPage from './pages/ContactPage';
import Admin from './pages/admin';
import LoginForm from './pages/LoginForm';
import "./App.css";
import ArvorePage from "./componentes/arvore";
import ListaArvores from "./ListaArvores";
import QuizPage from "./pages/QuizPage";
import TeamSection from "./componentes/TeamSection";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ListaArvores" element={<ListaArvores/>} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/arvore/:id" element={<ArvorePage />} />
        <Route path="/LoginForm" element={<LoginForm />} />
        <Route path="/QuizPage" element={<QuizPage />} />
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
          <h1>Bem-vindo ao Parque Municipal Luiz Balboni 🏞️</h1>
          <h3>
            Situado na cidade de São Miguel Arcanjo, portal da Mata Atlântica, abriga grande variedade de fauna e flora. Descubra as maravilhas da <b>Mata Atlântica</b> com histórias, imagens e curiosidade sobre as trilhas do nosso parque!
          </h3>
          <button className="button-SaibaMais1"><Link to="/ListaArvores" className="link-button-int"><strong>🌳 Explorar Trilhas</strong></Link></button>
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

      <TeamSection />
    </div>

    
  ); 
}

export default App;
