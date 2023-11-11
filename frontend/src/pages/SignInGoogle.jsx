// src/pages/SignInGoogle.jsx
import React from 'react';
import axios from '../utils/api';

const SignInGoogle = () => {
  // Implementa la lógica para redirigir a la página de autenticación de Google
  
  const handleSignInGoogle = async () => {
    // try {
    //   const response = await axios.get('/api/auth/google');
    //   const { success, token } = response.data;

    //   if (success) {
    //     // Llama a la función proporcionada desde el padre para manejar la redirección
    //     onLogin(token);
    //   }
    // } catch (error) {
    //   console.error('Error en la autenticación:', error);
    // }
    try {
      // Puedes realizar alguna acción antes de la redirección, si es necesario
      //const response = await axios.get('/api/auth/google');

      //console.log(response);

      // Redirige a la página de autenticación de Google en el backend
      window.location.href = `${import.meta.env.VITE_APP_BACKEND_URL}/api/auth/google`;

    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error);
    }
  };

  return (
    <div className='container text-center p-5'>
      <button className='btn btn-primary btn-lg' onClick={handleSignInGoogle}>
        <i className="fab fa-google fa-2x mr-2"></i>
        <br />
         Iniciar sesión con Google
      </button>
    </div>
  );
};

export default SignInGoogle;
