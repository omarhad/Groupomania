import React from "react";
import { useSelector } from "react-redux";
import UploadImg from "./UploadImg";
import UploadInfo from "./UploadInfo";

const UpdateProfil = () => {
  const userData = useSelector((state) => state.userReducer);
  return (
    <div className="updateProfil__container">
      
      <div className="updateProfil__container__content">
        <div className="updateProfil__container__content__img">
          <img src={userData.image} alt="user-pic" />
          <UploadImg />
          {/* <p>{errors.maxSize}</p> */}
          {/* <p>{errors.format}</p> */}
        </div>
        <div className="updateProfil__container__content__infos">
          <UploadInfo />
        </div>
      </div>
    </div>
  );
};

export default UpdateProfil;
