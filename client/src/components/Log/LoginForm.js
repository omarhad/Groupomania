import React, { Component } from "react";
import Button from "../../layouts/Button";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    switch (event.target.id) {
      case "email":
        if (this.verificationEmail(event.target.value)) {
          return true;
        } else {
          return false;
        }
      case "password":
        if (this.verificationPassword(event.target.value)) {
          return true;
        } else {
          return false;
        }
      default:
        break;
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = JSON.stringify(this.state);
    this.setState({
      email: "",
      password: "",
    });
    if (
      this.verificationEmail(document.getElementById("email").value) &&
      this.verificationPassword(document.getElementById("password").value)
    ) {
      fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
        RequestCredentials : 'include'
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }else{
            alert("Erreur lors de la connexion");
          }
        })
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", res.token);
          window.location.href = "/home";
        })
        .catch((error) => console.log(error));
    } else {
      alert("Veuillez remplir correctement tous les champs");
    }
  }

  verificationEmail(input) {
    let regEx = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    if (regEx.test(input) && input !== "") {
      return true;
    } else {
      return false;
    }
  }
  verificationPassword(input) {
    let regEx =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (regEx.test(input) && input !== "") {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div className="activeForm">
        <Button
          id="back"
          className="activeForm__Btn button"
          onClick={this.props.onClick}
        >
          back
        </Button>
        <form className="activeForm__form" onSubmit={this.handleSubmit}>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            id="password"
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <Button className="button" onClick={this.handleSubmit}> Log In</Button>
        </form>
      </div>
    );
  }
}
