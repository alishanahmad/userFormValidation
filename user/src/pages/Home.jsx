import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h1 className="text-4xl font-bold">User Signup and SignIn validation</h1>
      <div>
        <Link to="/signup" className="margin">
          Create an Account
        </Link>
      </div>
      <div>
        <Link to="/login" className="margin">
          Login
        </Link>
      </div>
    </>
  );
};

export default Home;
