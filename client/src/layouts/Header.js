import React, { Component } from "react";
import NavBar from "./NavBar";

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
      <div className={this.props.className}>
        <div className="header__logo">
          <img src="./img/logo/icon-left-font.svg" alt="" />
        </div>
        <div className="header__navbar">
          {this.state.navBar ? <NavBar /> : null}
        </div>
      </div>
    );
  }
}
