// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignInPassword from './pages/SignInPassword';
import SignInGoogle from './pages/SignInGoogle';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/signup">Crear cuenta</Link>
            </li>
            <li>
              <Link to="/signin/password">Iniciar sesión con contraseña</Link>
            </li>
            <li>
              <Link to="/signin/google">Iniciar sesión con Google</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin/password" element={<SignInPassword />} />
          <Route path="/signin/google" element={<SignInGoogle />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
