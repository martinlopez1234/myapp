import React from 'react';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import VideoLlamada from './VideoLlamada';
import Bancos from './Bancos';
import reportWebVitals from './reportWebVitals';
import MediosComunicacion from './MediosComunicacion';
import Contactos from './Contactos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/videoLLamada' element={<VideoLlamada />} />
        <Route path='/Bancos' element={<Bancos />} />
        <Route path='/medioscomunicacion' element={<MediosComunicacion />} />
        <Route path='/contactos' element={<Contactos />} />
      </Routes>

    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
