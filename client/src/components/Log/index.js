import React, { Component } from "react";
import LoginForm from "./LoginForm";
import LogPage from "./LogPage";
import RegisterForm from "./RegisterForm";

const mediaQuery = window.matchMedia("(max-width: 1024px)");

export default class Log extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageLogin: mediaQuery.matches ? false : true,
      pageRegister: false,
      page: true,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle = (e) => {
    if (e.target.id === "login") {
      if (mediaQuery.matches) {
        this.setState({ page: false,});
      }
      this.setState({ pageRegister: false });
      this.setState({ pageLogin: true });
    } else if (e.target.id === "register") {
      if (mediaQuery.matches) {
        this.setState({ page: false });
      }
      this.setState({ pageRegister: true });
      this.setState({ pageLogin: false });
    } else if (e.target.id === "back") {
      this.setState({ page: true });
      this.setState({ pageRegister: false });
      this.setState({ pageLogin: false });
    }
  };

  render() {
    return (
      <>
        {this.state.page ? <LogPage onClick={this.toggle} /> : null}
        {this.state.pageLogin ? <LoginForm onClick={this.toggle} /> : null}
        {this.state.pageRegister ? (
          <RegisterForm onClick={this.toggle} />
        ) : null}
      </>
    );
  }
}
