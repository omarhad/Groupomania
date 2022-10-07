import React from "react";
import { useSelector } from "react-redux";
import UploadImg from "./UploadImg";
import UploadBio from "./UploadBio";
import UploadBirthday from "./UploadBirthday";
import UploadEmail from "./UploadEmail";
import UploadJob from "./UploadJob";
import UploadFirstName from "./UploadFirstName";
import UploadLastName from "./UploadLastName";
import UploadPassword from "./UploadPassword";

const UpdateProfil = () => {
  const userData = useSelector((state) => state.userReducer);

  return (
    <div className="profilContent">
      <div className="profilContent__img">
        <img className="profilImg" src={userData.image} alt="user-pic" />
        <UploadImg />
        <div className="profilContent__img__arrow">
          <img
            className="arrow"
            src="./img/icons/arrow-down-solid.svg"
            alt=""
          />
          <p>Scroll down for more</p>
        </div>
      </div>
      <div className="profilContent__info">
        <div className="profilContent__info__arrow">
          <img className="arrow" src="./img/icons/arrow-up-solid.svg" alt="" />
          <p>Scroll up to go back</p>
        </div>
        <h1>Profile information</h1>
        <div className="uploadInfo">
          <UploadFirstName />
          <UploadLastName />
          <UploadEmail />
          <UploadPassword />
          <UploadBio />
          <UploadJob />
          <UploadBirthday />
        </div>
      </div>
    </div>
  );
};

export default UpdateProfil;
