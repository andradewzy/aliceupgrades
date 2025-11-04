import './App.css';
import Footer from './componentes/Footer/index.js';
import Header from './componentes/Header/index.js';
import Home from './componentes/Home/index.js';

import Projetos from './componentes/Projetos/index.js';
import Servicos from './componentes/Servicos/index.js';
import Contato from './componentes/Contato/index.js';
import DetalhesServico from './componentes/Servicos/DetalhesServico.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const projetos = require('./data/projetos.js');

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projetos' element={<Projetos />} />
          <Route path='/servicos' element={<Servicos />} />
          <Route path='/contato' element={<Contato />} />
          </Routes>
      

<Home/>

<Footer/>  

      </BrowserRouter>
    </>
  );
}

export default App;