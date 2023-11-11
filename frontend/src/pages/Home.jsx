import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <div>
      <p>Bienvenido, {user?.displayName}!</p>
      <button onClick={logout}>Salir</button>
      <Link to="/home/upload">
        <i className="fas fa-upload"></i>
        <span className="ml-2"> Subir foto</span>
      </Link>
      {/* Otras secciones o información específica del usuario */}
    </div>
  );
};

export default Home;
