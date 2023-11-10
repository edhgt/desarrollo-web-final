// src/pages/SignInGoogle.jsx
import React from 'react';
import axios from '../utils/api';

const SignInGoogle = () => {
  // Implementa la lógica para redirigir a la página de autenticación de Google
  const handleSignInGoogle = async () => {
    try {
      // Puedes realizar alguna acción antes de la redirección, si es necesario
      // ...

      // Redirige a la página de autenticación de Google en el backend
      window.location.href = `${process.env.REACT_APP_BACKEND_URL}/auth/google`;

    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error);
    }
  };

  return (
    <div>
      <h2>Iniciar sesión con Google</h2>
      <button onClick={handleSignInGoogle}>Iniciar sesión con Google</button>
    </div>
  );
};

export default SignInGoogle;
