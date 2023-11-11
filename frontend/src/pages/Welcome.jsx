import React from "react";
import { Link } from "react-router-dom";

import SignInPassword from "../pages/SignInPassword";

const Welcome = () => {
  return (
    <section className="py-5 container">
      <div className="row py-lg-5">
        <div className="col-lg-4 col-md-8 mx-auto shadow-lg p-5 mb-5 bg-body-tertiary rounded">
          <h1 className="fw-light text-uppercase text-center">Red Social UMG</h1>
          <SignInPassword />
          <p className="mt-4">
            <Link to="/signin/google">
              <i className="fab fa-google"></i>
              <span className="ml-2"> Iniciar sesión con Google</span>
            </Link>
          </p>
          <p>
            ¿No tienes una cuenta?
            <Link to="/signup" className="m-2">
              Registrate
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
