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
import ListaArvores from './ListaArvores';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App(){
  return(
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ListaArvores" element={<ListaArvores />} />
        <Route path="/Hello/" element={<Hello />} />
      </Routes>
    </Router>
  );
}

function Home(){
  return(
    <h1>Seja Bem-Vindo!</h1>
  );
}

export default App;
