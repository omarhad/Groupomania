import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateEmail } from "../../actions/user.actions";

const UploadEmail = () => {
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const [email, setEmail] = useState(userData.email);
  const [updateFormEmail, setUpdateFormEmail] = useState(false);

  const handelUpdateEmail = (e) => {
    e.preventDefault();
    dispatch(updateEmail(userData._id, email));
    setUpdateFormEmail(false);
  };

  useEffect (() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const refOne = useRef(null);
  const refTwo = useRef(null);

  const handleClickOutside = (event) => {
    if (refOne.current && !refOne.current.contains(event.target)) {
      if (refTwo.current && !refTwo.current.contains(event.target)) {
        setUpdateFormEmail(false);
      }
    }
  };

  return (
    <>
      <form onSubmit={handelUpdateEmail} className="uploadInfo__email">
        {updateFormEmail === false && (
          <>
            <div>
              <span>Email : </span>
              <p
                className="beforeInput"
                onClick={() => setUpdateFormEmail(!updateFormEmail)}
              >
                {userData.email}
              </p>
            </div>
          </>
        )}
        {updateFormEmail && (
          <>
            <div>
              <span>Email : </span>
              <input
                className="input"
                type="email"
                defaultValue={userData.email}
                onChange={(e) => setEmail(e.target.value)}
                ref={refOne}
              />
            </div>
          </>
        )}
      </form>
      {updateFormEmail && (
        <button ref={refTwo} className="button buttonUpload" onClick={handelUpdateEmail}>
          Validate
        </button>
      )}
    </>
  );
};

export default UploadEmail;
