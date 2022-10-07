import React, { Component } from "react";
import Button from "../../layouts/Button";

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      birthday: "",
      job: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    switch (event.target.id) {
      case "firstName":
        if (this.verificationVarious(event.target.value)) {
          document.getElementById("firstName").classList.remove("error");
          return true;
        } else {
          document.getElementById("firstName").classList.add("error");
          return false;
        }
      case "lastName":
        if (this.verificationVarious(event.target.value)) {
          document.getElementById("lastName").classList.remove("error");
          return true;
        } else {
          document.getElementById("lastName").classList.add("error");
          return false;
        }
      case "email":
        if (this.verificationEmail(event.target.value)) {
          document.getElementById("email").classList.remove("error");
          return true;
        } else {
          document.getElementById("email").classList.add("error");
          return false;
        }
      case "password":
        if (this.verificationPassword(event.target.value)) {
          document.getElementById("password").classList.remove("error");
          return true;
        } else {
          document.getElementById("password").classList.add("error");
          return false;
        }
      case "job":
        if (this.verificationVarious(event.target.value)) {
          document.getElementById("job").classList.remove("error");
          return true;
        } else {
          document.getElementById("job").classList.add("error");
          return false;
        }
      default:
        break;
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = JSON.stringify(this.state);
    console.log(data);
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      birthday: "",
      job: "",
    });
    if (this.verificationAll()) {
      fetch("http://localhost:3000/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      })
        .then((res) => {
          if (res.ok) {
            window.location.href = "/home";
          }else{
            alert("Erreur lors de la création de l'utilisateur");
          }
        })
        .catch(error => console.log(error));
    } else {
      alert("Veuillez remplir correctement tous les champs");
    }
  }

  verificationAll() {
    if (
      this.verificationVarious(document.getElementById("firstName").value) &&
      this.verificationVarious(document.getElementById("lastName").value) &&
      this.verificationEmail(document.getElementById("email").value) &&
      this.verificationPassword(document.getElementById("password").value) &&
      document.getElementById("birthday").value !== "" &&
      document.getElementById("job").value !== ""
    ) 
      return true;
    else return false;
  }

  verificationVarious(input) {
    let regEx = /^[a-zA-ZàâäéèêëîïôöûüùçÀÂÄÉÈÊËÎÏÔÖÛÜÙÇ'-']+$/;
    if (regEx.test(input) && input !== "") {
      return true;
    } else {
      return false;
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
    const { firstName, lastName, email, password, birthday, job } = this.state;
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
            id="firstName"
            type="text"
            name="firstName"
            placeholder="First name"
            value={firstName}
            onChange={this.handleChange}
          />
          <input
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Last name"
            value={lastName}
            onChange={this.handleChange}
          />
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
          />
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.handleChange}
          />
          <input
            id="birthday"
            type="date"
            name="birthday"
            value={birthday}
            onChange={this.handleChange}
          />
          <input
            id="job"
            type="text"
            name="job"
            placeholder="Job"
            value={job}
            onChange={this.handleChange}
          />
          <Button className="button" onClick={this.handleSubmit}>
            Create a new account
          </Button>
        </form>
      </div>
    );
  }
}
