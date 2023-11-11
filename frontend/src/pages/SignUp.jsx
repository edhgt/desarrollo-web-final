import React, { useState } from 'react';
import axios from '../utils/api';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post('/api/user/register', {
        username,
        email,
        password,
      });

    } catch (error) {
      console.error('Error al crear la cuenta:', error);
    }
  };

  return (
    <div>
      <h2>Crear cuenta</h2>
      <label>
        Usuario:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Correo electrónico:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Contraseña:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={handleSignUp}>Crear cuenta</button>
    </div>
  );
};

export default SignUp;
