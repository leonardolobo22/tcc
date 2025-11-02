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
import Animais from "./pages/Animais";
import Plantas from "./pages/Plantas";
import CuriosidadesDivertidas from "./pages/CuriosidadesDivertidas";


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
        <Route path="/Animais" element={<Animais />} />
        <Route path="/Plantas" element={<Plantas />} />
        <Route path="/CuriosidadesDivertidas" element={<CuriosidadesDivertidas />} />
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

      <div className="curiosidades-container">
         <h2 className="curiosidades-titulo">Curiosidades</h2>
         <p className="curiosidades-subtitulo">
           Descubra os animais, plantas e curiosidades desse bioma brasileiro! 🐒🌺🌧️
         </p>

         <div className="curiosidades-cards">
           {/* Card 1 - Animais */}
           <div className="curiosidade-card">
             <img src="animais_curiosidades.png" alt="Animais da Mata Atlântica" />
             <div className="curiosidade-overlay">
               <h3>Animais da Mata</h3>
               <p>Conheça bichinhos incríveis como o mico-leão-dourado e a onça-pintada! 🐾</p>
               <Link to="/Animais" className="curiosidade-btn">Saiba Mais</Link>
             </div>
           </div>

           {/* Card 2 - Plantas */}
           <div className="curiosidade-card">
             <img src="plantas_curiosidades.jpg" alt="Plantas da Mata Atlântica" />
             <div className="curiosidade-overlay">
               <h3>Plantas da Floresta</h3>
               <p>Veja flores coloridas, árvores gigantes e plantas que purificam o ar! 🌸</p>
               <Link to="/Plantas" className="curiosidade-btn">Saiba Mais</Link>
             </div>
           </div>

           {/* Card 3 - Curiosidades Divertidas */}
           <div className="curiosidade-card">
             <img src="curiosidades_divertidas.jpg" alt="Curiosidades Divertidas" />
             <div className="curiosidade-overlay">
               <h3>Curiosidades Divertidas</h3>
               <p>Sabia que algumas árvores “dormem”? Venha descobrir mais fatos curiosos! 🤩</p>
               <Link to="/CuriosidadesDivertidas" className="curiosidade-btn">Saiba Mais</Link>
             </div>
           </div>
         </div>
        </div>

      <TeamSection />
    </div>

    
  ); 
}

export default App;
