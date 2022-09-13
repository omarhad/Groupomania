import React from "react";
import { NavLink } from "react-router-dom";
import Logout from "../components/Log/Logout";
import { useSelector } from "react-redux";

export const NavBar = () => {
  const userData = useSelector((state) => state.userReducer);
  return (
    <nav className="navBar">
      <ul className="navBar__container">
        <li>
          <NavLink className="navBar__container__li" exact to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navBar__container__li" exact to="/profil">
            Members
          </NavLink>
        </li>
        <li>
          <NavLink className="navBar__container__li" exact to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="navBar__container__welcome" exact to="/profil">
            <h5>Welcome {userData.lastName}</h5>
          </NavLink>
        </li>
        <Logout />
      </ul>
    </nav>
  );
};

export default NavBar;
