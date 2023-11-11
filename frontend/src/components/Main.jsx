import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Welcome from "../pages/Welcome";
import SignUp from '../pages/SignUp';

import SignInGoogle from '../pages/SignInGoogle';
import Home from '../pages/Home';
import PhotoUploader from '../pages/PhotoUploader'

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin/google" element={<SignInGoogle />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/upload" element={<PhotoUploader />} />
      </Routes>
    </main>
  );
};

export default Main;
