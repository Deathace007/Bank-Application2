import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Welcome to the Bank App!</h1>
      <p className="lead">
        This is a simple banking application built with Flask and React.
      </p>
      <hr className="my-4" />
      <p>To access your account, please login or register.</p>
      <Link className="btn btn-primary btn-lg" to="/login" role="button">
        Login
      </Link>
      <Link className="btn btn-secondary btn-lg" to="/register" role="button">
        Register
      </Link>
    </div>
  );
}

export default Home;
