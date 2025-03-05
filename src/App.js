/*import React from 'react';
import Hello from './Hello';
import Arvore from './arvore';
import MudaCor from './MudaCor';
import ListaArvores from './ListaArvores';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import styled from "styled-components";
const Teste = styled.h1 `color: blue; font-size: 24px;`;
function App() {
  return (
    <><div>
      <Hello />
      <Teste>Esse é o nosso site!</Teste>;
      <Arvore nome="Ipê" bioma="Mata Atlântica" />
      <Arvore nome="Araucária" bioma="Mata de Araucárias" />
      <MudaCor />
      <ListaArvores />
    </div><Router>
        <nav>
          <Link to="/">Home</Link><br /><br />
          <Link to="/ListaArvores">Lista Arvores</Link><br /><br />
          <Link to="/Hello">Hello</Link>
        </nav>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/ListaArvores" element={<ListaArvores />} />
          <Route path="/Hello/" element={<Hello />} />
        </Routes>
      </Router></>
  );
}

function Home(){
    <div>

    </div>
}
*/
import React from 'react';
import Header from './Header';
import Hello from './Hello';
import Footer from './Footer';
import Arvores from './Arvores';
import IpeAmarelo from './IpeAmarelo';
import "./App.css";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App(){
  return(
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Arvores" element={<Arvores />} />
        <Route path="/Hello/" element={<Hello />} />
        <Route path="/IpeAmarelo/" element={<IpeAmarelo />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function Home(){
  return(
    <div>
      <div className="img1-home"><img src="" alt="Imagem Informativa 1"/></div>
      <h1 className="t1">Título 1</h1>
      <p className="p1">
        Texto 1 <br />
        Texto 1 <br />
        Texto 1 <br />
        Texto 1 <br />
        Texto 1 <br />
        Texto 1 <br />
      </p>
      <div className="img2-home"><img src="" alt="Imagem Informativa 2"/></div>
    </div>
  );
}

export default App;
