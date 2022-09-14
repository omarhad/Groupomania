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
      <li className="navItem slideInDown-4" onClick={logout}>
        <div className="navItem__link">
          <img src="./img/icons/logout.svg" alt="" />
        </div>
      </li>
      {ifLogout ? <Navigate to="/" replace /> : null}
    </>
  );
};

export default Logout;
