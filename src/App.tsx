// ✅ Asegúrate de usar BrowserRouter y Routes correctamente
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/layout/menu';
import Inicio from './components/pages/Inicio';
import About from './components/pages/About';
import Contact from './components/pages/contact';
import './App.css';
import Informacion from './components/pages/Informacion';


const App: React.FC = () => {
  
  return (
    <Router>
      <div className="App">
        <Menu />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/informacion" element={<Informacion />} />
        </Routes>

      </div>
    </Router>
  );
};

export default App;
