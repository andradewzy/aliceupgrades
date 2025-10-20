import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';


import 

function App() {
  return (
    <>
      <Header/>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projetos' element={<Projetos />} />
          <Route path='/servicos' element={<Servicos />} />
          <Route path='/contato' element={<Contato />} />
        </Routes>
      </BrowserRouter>

<Home/>

<Footer/>  

    </>
  );
}

export default App;

