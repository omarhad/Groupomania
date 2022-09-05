import React from "react";
import Button from "../../layouts/Button";

const LogPage = (props) => {
  return (
    <div className="log__loginPage">
      <div className="log__loginPage__title">
        <h1> Welcom to the Community</h1>
      </div>
      <div className="log__loginPage__grp">
        <span className="log__loginPage__grp__connect">Connect</span>
        <span className="log__loginPage__grp__share">Share</span>
      </div>
      <div className="log__loginPage__img">
        <img src="./img/log.svg" alt="" />
      </div>
      <span className="log__loginPage__engage">Engage</span>
      <div className="log__loginPage__button">
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
