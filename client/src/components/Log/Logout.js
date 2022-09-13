import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Logout = () => {
  const [ifLogout, setIfLogout] = useState(false);
  const logout = () => {
    localStorage.removeItem("User");
    setIfLogout(true);
  };

  return (
    <>
      <li onClick={logout}>
        <img className="logout" src="./img/icons/logout.svg" alt="" />
      </li>
      {ifLogout ? <Navigate to="/" replace /> : null}
    </>
  );
};

export default Logout;
