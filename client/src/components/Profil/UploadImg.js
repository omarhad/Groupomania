import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadPicture } from "../../actions/user.actions";

const UploadImg = () => {
  const [file, setFile] = useState();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);

  const handelPicture = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("id", userData._id);
    data.append("file", file);

    dispatch(uploadPicture(data, userData._id));
  };
  return (
    <form action="" onSubmit={handelPicture} className="uploadPic">
      <div className="uploadPic__content">
        <span>Change the picture</span>
        <input
          type="file"
          id="file"
          name="file"
          accept=".jpg, .jpeg, .png"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
        <button className="button" type="submit">Send</button>
      </div>
    </form>
  );
};

export default UploadImg;
