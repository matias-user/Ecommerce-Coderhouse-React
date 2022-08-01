import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/app.scss';

import Container from './components/Container/Container';
import NavBar from './shared/NavBar/NavBar';
import { CartProvider } from './context/CartContext';

import '../firebase.config.js';
import { Footer } from './shared/Footer/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Container />
        <Footer />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
)
