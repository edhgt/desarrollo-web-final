import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
    if (!context) {
    throw new Error("useAuth debe ser utilizado dentro de un AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  
  useEffect(() => {
    // Intenta cargar el token desde las cookies al cargar la aplicación
    const savedToken = Cookies.get("token");
    
    if (savedToken) {
      const decoded = jwtDecode(savedToken);
      setToken(savedToken);
      setUser(decoded);
      console.log(decoded)
      // También podrías realizar una solicitud al backend para obtener la información del usuario
      // y establecer el estado del usuario aquí
    }
  }, []);

  const logout = () => {
    Cookies.remove("token");
    setToken(null);
    setUser(null);
    location.href = '/'
    // Elimina el token de las cookies
    //Cookies.remove("token", { path: "/" });
  };

  const isAuthenticated = () => !!token;

  return (
    <AuthContext.Provider
      value={{ token, user, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};
