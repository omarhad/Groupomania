import React from "react";
import Button from "../../layouts/Button";

const LogPage = (props) => {
  return (
    <div className="loginPage">
      <div className="loginPage__title">
        <h1> Welcom to the Community</h1>
      </div>
      <div className="loginPage__grp">
        <span className="loginPage__grp__connect">Connect</span>
        <span className="loginPage__grp__share">Share</span>
      </div>
      <div className="loginPage__img">
        <img src="./img/log.svg" alt="" />
      </div>
      <span className="loginPage__engage">Engage</span>
      <div className="loginPage__button">
        <Button id="login" className="button" onClick={props.onClick}>
          Log In
        </Button>
        <Button id="register" className="button" onClick={props.onClick}>
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default LogPage;
