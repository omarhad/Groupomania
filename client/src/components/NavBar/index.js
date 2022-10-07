import React, { useState } from "react";
import NavItem from "./NavItem";
import Logout from "../Log/Logout";
import { useSelector } from "react-redux";

export const NavBar = () => {
  const userData = useSelector((state) => state.userReducer);
  const mediaQuery = window.matchMedia("(max-width: 1024px)");

  const [showLinks, setShowLinks] = useState(false);

  const handelShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const navBar = [
    {
      id: "1",
      link: "/home",
      title: "Home",
    },{
      id: "2",
      link: "/members",
      title: "Members",
    },
    {
      id: "3",
      link: "/profil",
      title: `Welcome ${userData.lastName}`,
    },
  ];


  return (
    <div className={`nav ${showLinks ? "show-nav" : "hide-nav"}`}>
      <ul className="navBar">
        {navBar.map((navBar) => (
          <NavItem link={navBar.link} key={navBar.id} num={navBar.id}>
            <h5>{navBar.title}</h5>
          </NavItem>
        ))}
        <Logout />
      </ul>
      <button className="navBar__burger" onClick={handelShowLinks}>
        <span className="navBar__burger--line"></span>
      </button>
    </div>
  );
};

export default NavBar;
