import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updatePassword } from "../../actions/user.actions";

const UploadPassword = () => {
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const [password, setPassword] = useState("");
  const [updateFormPassword, setUpdateFormPassword] = useState(false);

  const handelUpdatePassword = (e) => {
    e.preventDefault();
    dispatch(updatePassword(userData._id, password));
    setUpdateFormPassword(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const refOne = useRef(null);
  const refTwo = useRef(null);

  const handleClickOutside = (event) => {
    if (refOne.current && !refOne.current.contains(event.target)) {
      if (refTwo.current && !refTwo.current.contains(event.target)) {
        setUpdateFormPassword(false);
      }
    }
  };

  return (
    <>
      <form onSubmit={handelUpdatePassword} className="uploadInfo__password">
        {updateFormPassword === false && (
          <div>
            <span>password : </span>
            <p
              className="beforeInput"
              onClick={() => setUpdateFormPassword(!updateFormPassword)}
            >
              ********
            </p>
          </div>
        )}
        {updateFormPassword && (
          <>
            <div>
              <span>password : </span>
              <input
                className="input"
                type="password"
                defaultValue={userData.password}
                onChange={(e) => setPassword(e.target.value)}
                ref={refOne}
              />
            </div>
          </>
        )}
      </form>
      {updateFormPassword && (
        <button
          ref={refTwo}
          className="button buttonUpload"
          onClick={handelUpdatePassword}
        >
          Validate
        </button>
      )}
    </>
  );
};

export default UploadPassword;
