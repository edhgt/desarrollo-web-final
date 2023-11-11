// src/pages/SignInPassword.jsx
import React, { useState } from "react";
import axios from "../utils/api";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom'

const SignInPassword = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let [invalidPassword, setInvalidPassword] = useState("");
  const { setUser, isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  const handleSignInPassword = async (event) => {
    event.preventDefault();
    try {
      setInvalidPassword(false);
      const response = await axios.post("/api/auth/login", {
        username,
        password,
      });

      console.log(response.data); // Puedes manejar la respuesta según tus necesidades
      return navigate('/home');
      setUser(response.user);
    } catch (error) {
      setInvalidPassword(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSignInPassword}>
        <div className="mb-3">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label"
          >
            Usuario
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p className="text-danger">
          { invalidPassword ? 'Contraseña o usuario incorrecto' : ''}
        </p>
        <button type="submit" className="btn btn-primary">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default SignInPassword;
