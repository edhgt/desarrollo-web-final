import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PhotoList = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>Photo List Page</h2>
      <p>Welcome, {user ? user.username : 'Guest'}!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default PhotoList;
