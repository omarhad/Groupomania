import React, { Component } from "react";
import NavBar from "../components/NavBar";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navBar: this.props.navBar,
    };
    this.className = this.props.className;
  }

  render() {
    return (
      <nav className={this.props.className}>
        <div className="header__logo">
          <img src="./img/logo/icon-left-font.svg" alt="" />
        </div>
        {this.state.navBar ? <NavBar /> : null}
      </nav>
    );
  }
}
