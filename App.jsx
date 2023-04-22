import React from 'react';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import AcercaDe from './components/AcercaDe';
import Contacto from './components/Contacto';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/acerca-de" element={<AcercaDe />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;
