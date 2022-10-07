import React from "react";
import Header from "../layouts/Header";
import Log from "../components/Log";

const Login = () => {
  return (
    <div className="log">
      <Header className="header" />
      <div className="log__container">
        <Log />
      </div>
    </div>
  );
};

export default Login;
