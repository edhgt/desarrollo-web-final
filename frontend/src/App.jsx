// src/App.jsx
import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
