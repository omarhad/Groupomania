import React from "react";
import UpdateProfil from "../components/Profil/UpdateProfil";
import Header from "../layouts/Header";

const Profil = () => {
  return (
    <div className="updateProfil">
      <Header className="primaryHeader" navBar="true" />
      <div className="updateProfil__container">
        <UpdateProfil />
      </div>
    </div>
  );
};

export default Profil;
