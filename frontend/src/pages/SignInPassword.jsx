// src/pages/SignInPassword.jsx
import React, { useState } from 'react';
import axios from '../utils/api';

const SignInPassword = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignInPassword = async () => {
    try {
      const response = await axios.post('/api/auth/login', {
        username,
        password,
      });

      console.log(response.data); // Puedes manejar la respuesta según tus necesidades

    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div>
      <h2>Iniciar sesión con contraseña</h2>
      <label>
        Usuario:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Contraseña:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={handleSignInPassword}>Iniciar sesión</button>
    </div>
  );
};

export default SignInPassword;
